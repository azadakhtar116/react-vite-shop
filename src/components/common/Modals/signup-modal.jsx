import React, { useState } from "react";
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
} from "reactstrap";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupModal = (args) => {
  const [modal, setModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const formInputs = [
    {
      type: "text",
      placeholder: "name",
      name: "Name",
      validate: "name",
      defaultValue: "",
    },
    {
      type: "email",
      placeholder: "Email",
      name: "Email",
      validate: "email",
      defaultValue: "",
    },
    {
      type: "password",
      placeholder: "Password",
      name: "Password",
      validate: "password",
      defaultValue: "",
    },
  ];

  // ** Hooks
  const formValidation = yup.object().shape({
    name: yup.string().required("Please enter product name"),
    email: yup.string().required("Please enter  email"),
    password: yup.string().required("Please enter  password"),
  });
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(
    { mode: "onChange", resolver: yupResolver(formValidation) },
    { defaultValues: { name: "", email: "", password: "" } }
  );

  const toggle = () => setModal(!modal);
  const handleModalClose = () => {
    reset();
    setModal(false);
  };

  const handleCreateData = (data) => {
    if (data?.name) {
      const obj = {
        name: data?.name,
        email: email,
        password: data?.password,
      };
      const newData = [...Listing, obj];
      // const finalData = newData.push(obj)
      console.log("finalData", newData);
      dispatch(setProductsList(newData));
      handleModalClose();
      dispatch(setReFresh(true));
    } else {
      setShowError(true);
    }
  };
  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      console.log("dataaa", data);
      // const onlyDate = moment(selectedDate[0]).format("YYYY-MM-DD")
      handleCreateData(data);
    } else {
      console.log("error", data);
    }
  };

  return (
    <>
      <div>
        <User size={25} className="cursor-pointer" onClick={toggle} />

        <Modal className="p-4" isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>
            <h4 className="text-black">Sign Up</h4>
          </ModalHeader>
          <ModalBody>
            <div className="custom-form">
              <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  {formInputs.length > 0 ? 
                      formInputs.map((item, index) => (
                        <>
                          <div className="mb-3" key={index}>
                            <label className="block mb-2 text-sm text-grey-600">
                              {" "}
                              {item?.name}
                              <span className="text-sm text-red-600">*</span>
                            </label>
                            <Controller
                              id="name"
                              name="name"
                              defaultValue=""
                              control={control}
                              render={({ field, index }) => (
                                <Input
                                  type="text"
                                  autoComplete="off"
                                  className="w-full input input-bordered"
                                  {...field}
                                  placeholder="Name"
                                  invalid={errors.name && true}
                                />
                              )}
                            />
                            {errors.name && (
                              <p className="text-xs text-danger">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                        </>
                      ))
                   : (
                    ""
                  )}

                  <div className="mb-2 text-end">
                    <Button
                      type="reset"
                      className="me-2"
                      color="dark"
                      onClick={() => handleModalClose()}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="me-2" color="success">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};
export default SignupModal;
