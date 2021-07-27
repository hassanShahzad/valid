import styled from "styled-components";

export const Container = styled.div`
  width: "300px";
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RootContainer = styled.div`
  justify-content: center;
  transition: transform 0.7s ease-out;
  &.move-enter {
    opacity: 0.01;
    transform: translateY(-10%);
  }

  &.move-enter-active {
    opacity: 1;
    transform: translateY(-20%);
    transition: all 500ms ease-in 200ms;
  }

  &.move-exit {
    opacity: 1;
    transform: translateY(-30%);
  }

  &.move-exit-active {
    opacity: 0.01;
    transform: translateY(-40%);
    transition: all 500ms ease-in 200ms;
  }
`;

export const RootContainerMobile = styled.div`
  justify-content: center;
  transition: transform 0.7s ease-out;
  &.move-enter {
    opacity: 0.01;
    transform: translateX(-10%);
  }

  &.move-enter-active {
    opacity: 1;
    transform: translateX(-20%);
    transition: all 500ms ease-in 200ms;
  }

  &.move-exit {
    opacity: 1;
    transform: translateX(-30%);
  }

  &.move-exit-active {
    opacity: 0.01;
    transform: translateX(-40%);
    transition: all 500ms ease-in 200ms;
  }
`;

export const InvalidMessage = styled.h4`
  margin: 0 auto;
  color: red;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 250px;
`;
export const Title = styled.h2`
  margin: 0 auto;
  color: black;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  height: 50px;
`;
export const InputField = styled.input`
  margin: 0 auto;
  color: black;
  font-size: 15px;
  text-align: center;
  width: 250px;
  height: 50px;
`;
export const Button = styled.button`
  margin: 0 auto;
  color: black;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 260px;
  height: 50px;
`;

export const SignupText = styled.h4`
  margin: 0 auto;
  color: green;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  height: 60px;
`;
