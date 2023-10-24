"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
export default AuthProvider;
