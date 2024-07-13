import { SVGProps } from "react";

export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
        <path
            d="M16 4c-4.05 0-7.64 2.012-9.813 5.094l1.625 1.156A9.985 9.985 0 0 1 16 6c5.535 0 10 4.465 10 10s-4.465 10-10 10a9.99 9.99 0 0 1-8.188-4.25l-1.625 1.156A11.987 11.987 0 0 0 16 28c6.617 0 12-5.383 12-12S22.617 4 16 4Zm-7.344 7.281-4 4L3.97 16l.687.719 4 4 1.438-1.438L7.813 17H20v-2H7.812l2.282-2.281Z"
            style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "currentColor",
                fillRule: "nonzero",
                opacity: 1,
            }}
            transform="matrix(.83 0 0 .83 -1.263 -1.28)"
        />
    </svg>
);
