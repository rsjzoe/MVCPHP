import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import "./input.css";

export const Input = forwardRef(function (
    { label, className, containerClassName, ...props }: InputProps,
    ref: any
) {
    return (
        <div className={classNames("input-container", containerClassName)}>
            {label && <label>{label}</label>}
            <input
                className={classNames("input", className)}
                {...props}
                ref={ref}
            />
        </div>
    );
});
type InputProps = ComponentProps<"input"> & {
    label?: string;
    containerClassName?: string;
};
