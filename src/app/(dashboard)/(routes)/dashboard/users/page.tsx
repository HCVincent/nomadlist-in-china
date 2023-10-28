"use client";

import { useEffect } from "react";
import { NextResponse } from "next/server";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import axios from "axios";

export default function UsersPage() {
  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get("/api/users");
      } catch (error) {
        console.log(error);
      }
    };

    const users = getUsers();
  }, []);
  return (
    <div className="border-blue-300 border-2 w-full h-full">
      <p>users</p>
    </div>
  );
}
