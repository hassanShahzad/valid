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
  username: yup
    .string()
    .test(
      "validUserName",
      "Username can only contains alphanumeric character",
      function (value) {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (/^[a-zA-Z0-9]+$/.test(value)) {
              resolve(true);
            } else {
              resolve(false);
            }
          }, 100);
        });
      }
    ),
});

const UsernameStep = (props) => {
  const { onSubmit } = props;
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Schema),
  });
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Title>Enter your username</Title>
        <InputField
          {...register("username", {
            required: true,
            placeholder: "Your username",
          })}
          name='username'
          type='text'
        />
        <Button type='submit'>Sign up</Button>
        {errors && errors.username && (
          <InvalidMessage>{errors.username.message}</InvalidMessage>
        )}
      </Container>
    </form>
  );
};

export default UsernameStep;
