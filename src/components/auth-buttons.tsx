"use client";

import React, { useEffect, useState } from "react";

import { Auth } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
type AuthButtonProps = {};

const AuthButton: React.FC<AuthButtonProps> = () => {
  const { user } = useAuthenticator((context) => [context.user]);

  return <div className="">{user?.username}</div>;
};
export default AuthButton;
