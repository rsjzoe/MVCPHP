import { PropsWithChildren, useState } from "react";
import "./sidebar.css";
import { NavLink } from "./components/nav-link";
import { Button } from "../button/button";
import classNames from "classnames";
import logo from "./ok.png";
import { useLocation } from "react-router-dom";
import { ChevronRightIcon } from "../icons/chevron-right-icon";
import { ChevronLeftIcon } from "../icons/chevron-left-icon";
import { DashboardIcon } from "../icons/dashboard-icon";
import { LogoutIcon } from "../icons/logout-icon";
import { Users } from "../icons/users";

const NAV_LINK = [
  {
    name: "Etudiants",
    href: "/etudiants",
    icon: <Users/>
  },
];

export function Sidebar({ isResized, onToggle }: SidebarProps) {
  const location = useLocation();
  const pathSplited = location.pathname.split("/");
  const active = pathSplited[1] || "/";
  const [activePage, setActivePage] = useState(active);

  const logout = () => {};

  return (
    <div className="side-bar">
      <div className="between">
        <div>
          <div className="brand">
            <img
              src={logo}
              className={classNames("logo", {
                resized: isResized,
              })}
            />
          </div>
          <div className="toggle" onClick={onToggle}>
            {isResized ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </div>
          <ul className="nav-list">
            <NavLink
              name="Tableau de bord"
              href={"/"}
              active={activePage == "/"}
              onClick={() => setActivePage("/")}
              icon={<DashboardIcon />}
            />
            {NAV_LINK.map((item, i) => (
              <NavLink
                name={item.name}
                href={item.href}
                key={i}
                active={activePage.includes(item.href)}
                onClick={() => setActivePage(item.href)}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        <div
          className={classNames("logout-container", {
            resized: isResized,
          })}
        >
          <Button onClick={logout} iconLeft={<LogoutIcon />}>
            {!isResized && "Se deconnecter"}
          </Button>
        </div>
      </div>
    </div>
  );
}

type SidebarProps = PropsWithChildren<{
  isResized: boolean;
  onToggle: () => void;
}>;
