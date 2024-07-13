import { ComponentProps, PropsWithChildren } from "react";

export function TR<T>({
    children,
    item,
    onClickRow,
    ...props
}: TableComponentsProps<T>) {
    return (
        <tr
            onClick={(e) => {
                const target = e.target as HTMLElement;
                const tagName = target.tagName.toLocaleLowerCase();
                if (
                    onClickRow &&
                    (tagName.includes("td") || tagName.includes("tr"))
                )
                    onClickRow(item);
            }}
            {...props}
        >
            {children}
        </tr>
    );
}

type TableComponentsProps<T> = ComponentProps<"tr"> & {
    item: T;
    onClickRow?: (item: T) => void;
};
