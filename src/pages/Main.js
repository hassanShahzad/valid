import React, { useState } from "react";
import { useStateMachine } from "little-state-machine";
import MediaQuery from "react-responsive";
import { CSSTransition } from "react-transition-group";
import updateFormState from "../store/actions";
import EmailStep from "../components/EmailStep";
import UsernameStep from "../components/UsernameStep";
import PasswordStep from "../components/PasswordStep";
import {
  SignupText,
  RootContainer,
  RootContainerMobile,
} from "../styles/Styles";
const Main = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const duration = 400;
  const [inProp, setInProp] = useState(true);

  // use hook for getting form state and actions
  const { state, actions } = useStateMachine({ updateFormState });
  // form on submit handles
  const emailFormHandle = ({ email }) => {
    setInProp(false);
    setTimeout(() => {
      actions.updateFormState({
        email: email,
        step: "Password",
      });
      setInProp(true);
    }, 700);
  };
  const passwordFormHandle = ({ password }) => {
    setInProp(false);
    setTimeout(() => {
      actions.updateFormState({
        step: "Username",
      });
      setInProp(true);
    }, 700);
  };
  const usernameFormHandle = () => {
    setInProp(false);
    setTimeout(() => {
      setIsCompleted(true);
      setInProp(true);
    }, 700);
  };

  const step = () => {
    return (
      <CSSTransition
        in={inProp}
        classNames='fade'
        timeout={duration}
        unmountOnExit
      >
        <RootContainer>
          {state.step === "Email" && (
            <EmailStep email={state.email} onSubmit={emailFormHandle} key='1' />
          )}
          {state.step === "Password" && (
            <PasswordStep onSubmit={passwordFormHandle} key='2' />
          )}
          {state.step === "Username" && (
            <UsernameStep onSubmit={usernameFormHandle} key='3' />
          )}
          {isCompleted ? (
            <SignupText> Sign up is successful </SignupText>
          ) : null}
        </RootContainer>
      </CSSTransition>
    );
  };
  const stepMobile = () => {
    return (
      <CSSTransition
        in={inProp}
        classNames='fade'
        timeout={duration}
        unmountOnExit
      >
        <RootContainerMobile>
          {state.step === "Email" && (
            <EmailStep email={state.email} onSubmit={emailFormHandle} key='1' />
          )}
          {state.step === "Password" && (
            <PasswordStep onSubmit={passwordFormHandle} key='2' />
          )}
          {state.step === "Username" && (
            <UsernameStep onSubmit={usernameFormHandle} key='3' />
          )}
          {isCompleted ? (
            <SignupText> Sign up is successful </SignupText>
          ) : null}
        </RootContainerMobile>
      </CSSTransition>
    );
  };

  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>{step()} </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>{stepMobile()} </MediaQuery>
    </div>
  );
};
export default Main;
