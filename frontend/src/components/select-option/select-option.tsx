import { PropsWithChildren } from "react";
import Select from "react-select";
import "./select.css";
import classNames from "classnames";

export function SelectOption<T>({
    onChange,
    options,
    label,
    clearable = false,
    value,
    defaultValue,
    className,
    placeholder = "Selectionner...",
}: SelectOptionProps<T>) {
    return (
        <div className={classNames("select-container", className)}>
            {label && <label>{label}</label>}
            <Select
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

type SelectOptionProps<T> = PropsWithChildren<{
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
