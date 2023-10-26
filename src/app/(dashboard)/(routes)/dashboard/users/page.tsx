"use client";

import { useEffect } from "react";
import { NextResponse } from "next/server";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";

interface User {
  id: string;
  email: string;
}

interface ListUsersData {
  listUsers: {
    items: User[];
  };
}

export default function UsersPage() {
  useEffect(() => {
    const getUsers = async () => {
      let usersData: GraphQLResult<ListUsersData> | undefined;
      try {
        usersData = (await API.graphql(
          graphqlOperation(listUsers)
        )) as GraphQLResult<ListUsersData>;
        console.log(usersData);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
      if (usersData?.data?.listUsers) {
        return new NextResponse(
          JSON.stringify(usersData.data.listUsers.items),
          { status: 200 }
        );
      } else {
        return new NextResponse("Failed to fetch users", { status: 500 });
      }
    };
    const users = getUsers();
    console.log("users", users);
  }, []);
  return (
    <div className="border-blue-300 border-2 w-full h-full">
      <p>users</p>
    </div>
  );
}
