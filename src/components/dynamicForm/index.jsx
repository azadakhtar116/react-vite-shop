import React from "react";

// third party
import toast from 'react-hot-toast'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Button,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  FormFeedback,
  Label,
} from "reactstrap";
import { Crosshair, X } from "react-feather";

const formValidation = yup.object().shape({
  users: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
    })
  ),
});

const DynamicForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      users: [{ name: "", email:   '' }],
    },
    resolver: yupResolver(formValidation),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });
  const onSubmit = (data) => {
    if (data?.users.length > 0) {
      console.log("Form Data:", data?.users);
      toast.success('Dealer added successfully')
    } else {
      toast.danger('Dealer deleted successfully')
    }
  };

  return (
    <>
      <div className="m-5">
        <Container>
          <Row>
            <Col className="col-sm-12 col-md-6 offset-md-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Dynamic Form</h2>
                {fields.map((field, index) => (
                  <FormGroup key={field.id}>
                    <Row>
                      <Col className="col-md-12">
                        <div className="float-end">
                          <X
                            className="cursor-pointer"
                            size={30}
                            color="red"
                            onClick={() => remove(index)}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <Label
                          className="block mb-2 text-sm text-grey-600"
                          for={`users[${index}].name`}
                        >
                          Name
                          <span className="text-sm text-danger">*</span>
                        </Label>
                        <Controller
                          id="name"
                          name="name"
                          defaultValue=""
                          control={control}
                          render={({ fields }) => (
                            <input
                              type="text"
                              autoComplete="off"
                              className="form-control"
                              {...register(`users.${index}.name`)}
                              placeholder="Name"
                              invalid={errors.name && true}
                            />
                          )}
                        />
                        {errors.users?.[index]?.name && (
                          <FormFeedback className="d-block text-danger text-xs">
                            {errors.users[index].name.message}
                          </FormFeedback>
                        )}
                      </Col>

                      <Col lg={6}>
                        <Label
                          className="block mb-2 text-sm text-grey-600"
                          for={`users[${index}].name`}
                        >
                          Email
                          <span className="text-sm text-danger">*</span>
                        </Label>
                        <Controller
                          id="email"
                          name="email"
                          defaultValue=""
                          control={control}
                          render={({ fields }) => (
                            <input
                              type="email"
                              autoComplete="off"
                              className="form-control"
                              {...register(`users.${index}.email`)}
                              placeholder="Email"
                              invalid={errors.email && true}
                            />
                          )}
                        />
                        {errors.users?.[index]?.email && (
                          <FormFeedback className="d-block text-danger text-xs">
                            {errors.users[index].email.message}
                          </FormFeedback>
                        )}
                      </Col>

                    </Row>
                  </FormGroup>
                ))}
                <Row>
                  <Col>
                    <div className="text-end">
                      <Button
                        className="me-2"
                        color="dark"
                        onClick={() => append({ name: "" })}
                      >
                        Add User
                      </Button>
                      <Button type="submit" className="me-2" color="success">
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Users</h2>
      {fields.map((field, index) => (
        <div key={field.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <input
            placeholder="Name"
            {...register(`users.${index}.name`)}
          />
          <p style={{ color: 'red' }}>{errors?.users?.[index]?.name?.message}</p>

          <input
            placeholder="Email"
            {...register(`users.${index}.email`)}
          />
          <p style={{ color: 'red' }}>{errors?.users?.[index]?.email?.message}</p>

          <button type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: '', email: '' })}>
        Add User
      </button>
      <br /><br />
      <button type="submit">Submit</button>
    </form> */}
    </>
  );
};

export default DynamicForm;
