import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import { Login } from "./auth-components/Login.js";
import { Home } from "./auth-components/Home.js";
import "./styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function Signup() {
  const { user } = useAuthenticator();

  if (user) {
    return <Home />;
  }

  return <Login />;
}