import { PropsWithChildren } from "react";
// import { useAuth } from "../../../auth/context/use-auth";
import { Navigate } from "react-router-dom";
// import { ROUTES } from "../../../routes";

export function GuestGuard({ children }: GuestGuardProps) {
  // const { authStatus } = useAuth();
  let authStatus = "guest";
  // console.log(authStatus);

  if (authStatus == "unknown") return <div>loading...</div>;

  if (authStatus == "authenticated") return <Navigate to={"/"} />;

  return <>{children}</>;
}

type GuestGuardProps = PropsWithChildren<{}>;
