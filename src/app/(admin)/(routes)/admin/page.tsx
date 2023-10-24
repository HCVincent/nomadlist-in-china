"use client";

import useAuthUtils from "@/hooks/useAuthUtils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLogin() {
  const { checkUserGroup } = useAuthUtils();
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  useEffect(() => {
    const adminAuth = async () => {
      const group = await checkUserGroup();
      if (group === process.env.NEXT_PUBLIC_AUTH_ADMIN) {
        setIsAdmin(true);
      } else {
        router.push("/");
        setIsAdmin(false);
      }
    };
    adminAuth();
  }, [user, checkUserGroup, router]);
  return (
    <div className="flex justify-center items-center">
      {isAdmin ? <></> : <>loading</>}
    </div>
  );
}
