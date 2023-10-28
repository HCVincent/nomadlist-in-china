"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure({ ...awsExports });

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
export default AuthProvider;
