import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateMachineProvider, createStore } from "little-state-machine";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

// create out global form state
createStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* provide out global form state to App component */}
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
