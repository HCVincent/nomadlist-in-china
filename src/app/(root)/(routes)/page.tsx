"use client";
import awsExports from "@/aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
