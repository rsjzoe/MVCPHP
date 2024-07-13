export function TableRow<T>({ item }: TableRowProps<T>) {
    const entries = Object.entries(item);

    return (
        <>
            {entries.map(([key, value]) => (
                <td key={key}>{value}</td>
            ))}
        </>
    );
}

type TableRowProps<T> = {
    item: T;
};
