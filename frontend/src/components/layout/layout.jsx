import { PropsWithChildren, useState } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import classNames from "classnames";
import { Sidebar } from "../sidebar/sidebar";
import { AuthenticatedGuard } from "../guard/authenticated-guard";
import { Button } from "../button/button";
// import { AuthService } from "../../../auth/auth.service";
// import { useAuth } from "../../../auth/context/use-auth";

export function Layout({}) {
  const [resized, setResized] = useState(false);
  // const { getUser } = useAuth();

  const logout = () => {
    // AuthService.logout();
    // getUser();
    // navigate(ROUTES.login());
  };

  return (
    <AuthenticatedGuard>
      <div
        className={classNames("app-container", {
          "resized-sidebar": resized,
        })}
      >
        <div className="">
          <div
            className={classNames("side-bar-fixed", {
              "resized-sidebar": resized,
            })}
          >
            <Sidebar
              isResized={resized}
              onToggle={() => setResized(!resized)}
            />
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </AuthenticatedGuard>
  );
}
