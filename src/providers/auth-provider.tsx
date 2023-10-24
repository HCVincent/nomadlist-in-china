"use client";
import awsExports from "@/aws-exports";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsExports, ssr: true });
type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
export default AuthProvider;
