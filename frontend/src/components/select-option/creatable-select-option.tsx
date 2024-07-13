import { PropsWithChildren } from "react";
import Creatable from "react-select/creatable";
import "./select.css";
import classNames from "classnames";

export function CreatableSelectOption<T>({
    onChange,
    options,
    label,
    clearable = false,
    value,
    defaultValue,
    className,
    placeholder = "Selectionner...",
}: CreatableSelectOptionProps<T>) {
    return (
        <div className={classNames("select-container", className)}>
            {label && <label>{label}</label>}
            <Creatable
                options={options}
                onChange={(option) => {
                    option ? onChange(option.value) : onChange(null);
                }}
                className="select"
                classNames={{
                    control: (state) => (state.isFocused ? "select-focus" : ""),
                }}
                isClearable={clearable}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </div>
    );
}

type CreatableSelectOptionProps<T> = PropsWithChildren<{
    options: Option<T>[];
    onChange?: (item: T) => void;
    label?: string;
    clearable?: boolean;
    value?: Option<T> | null;
    defaultValue?: Option<T> | null;
    className?: string;
    placeholder?: string;
}>;

type Option<T> = {
    value: T;
    label: string;
};
