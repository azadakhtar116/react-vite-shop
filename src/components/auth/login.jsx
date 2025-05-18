import React, { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { User } from "react-feather";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  FormFeedback,
} from "reactstrap";
import InputPasswordToggle from "../common/input-password-toggle/index";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Toaster, toast } from 'react-hot-toast';
// Utility-Service
import {
  getToken,
  setUserSession,
  removeUserSession,
} from "../../utility/AuthService";

import { loginService } from "../../services/auth.service";
import { setUser, setToken } from "../../redux/slices/authSlice";
const LoginModal = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const token = getToken()
    useEffect(() => {
        if (token) {
            // toast.success('Event Added')
            navigate('/')
        } else {
            // removeUserSession()
            // localStorage.clear()
        }
    })

  // ** Hooks
  const formValidation = yup.object().shape({
    // email: yup.string().email("Invalid email").required("Please enter  email"),
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter  password"),
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(
    { mode: "onChange", resolver: yupResolver(formValidation) },
    { defaultValues: { username: "emilys", password: "emilyspass" } }
  );

  const handleLogin = async (data, e) => {
    setLoading(true);

    const inputsValue = {
      username: data?.username,
      password: data?.password,
    };

    // const formData = new FormData()
    // formData.append('username', data.username)
    // formData.append('password', data.password)
    const result = await loginService(inputsValue).catch((error) => {
      setLoading(false);
      // console.log('MyError', error.response.data.message)
      // toast.success(result?.data?.message)
    });

    //console.log("Token1", result);
    if (result?.status === 200) {
      const resData = result?.data;
      // console.log("if", resData?.accessToken);
      reset();
      if (resData?.accessToken) {
        setLoading(false);
        // toast(() => (
        //   <div className="d-flex">
        //     <div className="me-1">
        //       <Avatar
        //         size="sm"
        //         color="success"
        //         icon={<Icons.Check size={12} />}
        //       />
        //     </div>
        //     <div className="d-flex flex-column">
        //       <h6 className="toast-title">Login successfully</h6>
        //     </div>
        //   </div>
        // ));
        // toast.success('Login Successfully')
        setUserSession(resData?.accessToken, resData);
        dispatch(setUser(resData));
        dispatch(setToken(resData?.accessToken));
        localStorage.setItem("token", JSON.stringify(resData?.accessToken));
        localStorage.setItem("userData", JSON.stringify(resData));
        navigate("/dashboard");

      } else {
        // toast.success(result.data.errorMessage)
        setLoading(false);
        // ErrorToast(result)
      }
    } else {
      // toast.success(result.data.message);
      setLoading(false);
    }
    return false;
  };

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      //console.log("dataaa", data);
      // const onlyDate = moment(selectedDate[0]).format("YYYY-MM-DD")
      handleLogin(data);
    } else {
      console.log("error", data);
    }
  };
  return (
    <>
      <div className="custom-form">
        <Container>
          <Row>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Col className="col-sm-12 col-md-4 offset-md-4 border-1 p-lg-5">
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div className="mb-2">
                    <label className="block mb-2 text-sm text-grey-600">
                      Username
                      <span className="text-sm text-red-600">*</span>
                    </label>
                    <Controller
                      id="username"
                      name="username"
                      defaultValue=""
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          autoComplete="off"
                          className="w-full input input-bordered"
                          {...field}
                          placeholder="Username"
                          invalid={errors.username && true}
                        />
                      )}
                    />
                    {errors.username && (
                      <p className="text-xs text-danger">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-2">
                    <label className="block mb-2 text-sm text-grey-600">
                      Password
                      <span className="text-sm text-red-600">*</span>
                    </label>
                    <Controller
                      id="password"
                      name="password"
                      defaultValue=""
                      control={control}
                      render={({ field }) => (
                        <InputPasswordToggle
                          autoComplete="off"
                          className="w-full input input-bordered"
                          {...field}
                          placeholder="Password"
                          invalid={errors.password && true}
                        />
                      )}
                    />
                    {errors.password && (
                      <p className="text-xs text-danger">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-2 text-end">
                    <Button type="submit" className="me-2" color="success">
                      Submit
                    </Button>
                  </div>
                </div>
              </Col>
            </form>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LoginModal;
