import { PropsWithChildren } from "react";
// import { useAuth } from "../../../auth/context/use-auth";
import { Navigate } from "react-router-dom";
import { Loading } from "../loading/loading";

export function AuthenticatedGuard({ children }: AuthenticatedGuardProps) {
    // const { authStatus, user } = useAuth();
    let authStatus = "authenticated"
    // console.log(user);

    // console.log(authStatus);
    if (authStatus == "unknown") return <Loading />;

    if (authStatus == "guest") return <Navigate to={"/login"} />;

    return <>{children}</>;
}

type AuthenticatedGuardProps = PropsWithChildren<{}>;
