import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./components/App";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "7507741a-5128-459b-aa9f-3fc734a609f1",
  clientToken: "pub4e290f4cc26391b7820b4a9aace4a125",
  site: "datadoghq.com",
  service: "rum-spec-session-app",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
  defaultPrivacyLevel: "mask-user-input"
});

datadogRum.startSessionReplayRecording();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
