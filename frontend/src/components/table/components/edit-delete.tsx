import { PropsWithChildren } from "react";
import { EditIcon } from "../../icons/edit-icon";
import { TrashIcon } from "../../icons/trash-icon";

export function EditDelete({ onDelete, onEdit }: EditDeleteProps) {
    return (
        <>
            <td>
                <div className="action-container">
                    <span className="edit action" onClick={onEdit}>
                        <EditIcon />
                    </span>
                    <span className="delete action" onClick={onDelete}>
                        <TrashIcon />
                    </span>
                </div>
            </td>
        </>
    );
}

type EditDeleteProps = PropsWithChildren<{
    onDelete?: () => void;
    onEdit?: () => void;
}>;
