import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { User } from "react-feather";
import {
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
import InputPasswordToggle from "../input-password-toggle/index";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Utility-Service
import {
  getToken,
  setUserSession,
  removeUserSession,
} from "../../../utility/AuthService";

import { loginService } from "../../../services/auth.service";
import { setUser } from "../../../redux/slices/authSlice";
const LoginModal = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  // ** Hooks
  const formValidation = yup.object().shape({
    // email: yup.string().email("Invalid email").required("Please enter  email"),
    username: yup.string().required("Please enter  username"),
    password: yup.string().required("Please enter  password"),
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(
    { mode: "onChange", resolver: yupResolver(formValidation) },
    { defaultValues: { username: "", password: "" } }
  );

  const toggle = () => setModal(!modal);
  const handleModalClose = () => {
    reset();
    setModal(false);
  };

  // const handleLogin = async (data, e) => {
  //   // e.preventDefault();
  //   setLoading(true);

  //   const inputsValue = {
  //     username: data?.username,
  //     password: data?.password,
  //   };

  //   // const formData = new FormData()
  //   // formData.append('username', data.username)
  //   // formData.append('password', data.password)
  //   const result = await loginService(inputsValue).catch((error) => {
  //     setLoading(false);
  //     // console.log('MyError', error.response.data.message)
  //     // toast.success(result?.data?.message)
  //   });

  //   const resData = result?.data?.data;
  //   // console.log('Token', result?.data?.status === 'success')
  //   if (result?.data?.status === "success") {
  //     reset();
  //     setLoading(false);
  //     if (resData?.token) {
  //       setLoading(false);
  //       toast(() => (
  //         <div className="d-flex">
  //           <div className="me-1">
  //             <Avatar
  //               size="sm"
  //               color="success"
  //               icon={<Icons.Check size={12} />}
  //             />
  //           </div>
  //           <div className="d-flex flex-column">
  //             <h6 className="toast-title">Login successfully</h6>
  //           </div>
  //         </div>
  //       ));
  //       handleModalClose();
  //       setUserSession(
  //         resData?.access_token,
  //         resData?.user,
  //         resData?.access_token
  //       );
  //       dispatch(setUser(resData?.user));
  //       localStorage.setItem("token", JSON.stringify(resData?.access_token));
  //       localStorage.setItem("userData", JSON.stringify(resData?.user));
  //       if (resData?.user) {
  //         navigate("/dashboard");
  //       } else {
  //         // navigate('/sales/agent/order/management')
  //       }
  //     } else {
  //       // toast.success(result.data.errorMessage)
  //       setLoading(false);
  //       // ErrorToast(result)
  //     }
  //   } else {
  //     toast.success(result.data.message);
  //     setLoading(false);
  //   }
  //   return false;
  // };

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      console.log("dataaa", data);
      // const onlyDate = moment(selectedDate[0]).format("YYYY-MM-DD")
      // handleLogin(data);
    } else {
      console.log("error", data);
    }
  };
  return (
    <>
      <div>
        <User size={25} className="cursor-pointer" onClick={toggle} />

        <Modal className="p-4" isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>
            <h4 className="text-black">Log In</h4>
          </ModalHeader>
          <ModalBody>
            <p>hhghj</p>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};
export default LoginModal;
