import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Container,
  InputField,
  InvalidMessage,
  Title,
} from "../styles/Styles";

const Schema = yup.object().shape({
  email: yup
    .string()
    .test("validEmail", "Please enter valid email", function (value) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
              value
            )
          ) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, 100);
      });
    }),
});

const EmailStep = (props) => {
  // get form on Submit handler from parent component
  const { onSubmit, email } = props;
  // apply validations schema to react-hook-form form object
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Schema),
  });
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Title>Enter your email</Title>
        {/* check validation errors */}

        <InputField
          {...register("email", { required: true })}
          placeholder='Your email'
        />
        <Button type='submit'>Next</Button>
        {errors && errors.email && (
          <InvalidMessage>{errors.email.message}</InvalidMessage>
        )}
      </Container>
    </form>
  );
};

export default EmailStep;
