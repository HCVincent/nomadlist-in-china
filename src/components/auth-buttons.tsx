"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Auth } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "./ui/button";
import { closeModal, showSignupModal } from "@/redux/modal-slice";
type AuthButtonProps = {};

const AuthButton: React.FC<AuthButtonProps> = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      dispatch(closeModal());
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <div className="">
      {user ? (
        <Button variant="ghost" onClick={handleLogout} className="">
          Logout
        </Button>
      ) : (
        <>
          <Button
            variant="outline"
            className="ml-2"
            onClick={() => {
              // console.log state here
              dispatch(showSignupModal());
            }}
          >
            Sign Up / Log In
          </Button>
        </>
      )}
    </div>
  );
};
export default AuthButton;
