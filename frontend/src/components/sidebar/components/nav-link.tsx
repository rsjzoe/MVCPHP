import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function NavLink({
    name,
    icon,
    href,
    active,
    onClick,
}: NavLinkProps) {
    return (
        <li>
            <Link
                to={href}
                className={classNames("nav-link", { active })}
                onClick={onClick}
            >
                <span className="nav-icon">{icon}</span>
                <span className="">{name}</span>
            </Link>
        </li>
    );
}

type NavLinkProps = PropsWithChildren<{
    name: string;
    active?: boolean;
    href: string;
    icon?: React.ReactElement;
    onClick: () => void;
}>;
