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
  password: yup
    .string()
    .test(
      "validPassword",
      "Password requires one special character",
      function (value) {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (
              /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/.test(
                value
              )
            ) {
              resolve(true);
            } else {
              resolve(false);
            }
          }, 100);
        });
      }
    ),
});

const PasswordStep = (props) => {
  const { onSubmit } = props;
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(Schema),
  });
  const { errors } = formState;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Title>Enter your password</Title>
        <InputField
          {...register("password", {
            required: true,
            placeholder: "Your password",
          })}
          name='password'
          type='password'
        />
        <Button type='submit'>Next</Button>
        {errors && errors.password && (
          <InvalidMessage>{errors.password.message}</InvalidMessage>
        )}
      </Container>
    </form>
  );
};
export default PasswordStep;
