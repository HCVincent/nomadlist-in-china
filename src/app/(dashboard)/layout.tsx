"use client";

import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import useAuthUtils from "@/hooks/useAuthUtils";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
    <div className="h-full flex items-center justify-center">
      {isAdmin ? (
        <>
          <div className="h-full  w-36">
            <NavigationSidebar />
          </div>
          <div className="flex flex-1 h-full">{children}</div>
        </>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default DashboardLayout;
