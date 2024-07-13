import { TableRow } from "./components/table-row";
import "./table.css";
import { AlertVariant } from "../../common.type";
import classNames from "classnames";
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { EditDelete } from "./components/edit-delete";
import { TR } from "./components/table-components";
import { ChevronLeftIcon } from "../icons/chevron-left-icon";
import { ChevronRightIcon } from "../icons/chevron-right-icon";
import { CONSTANT } from "../../helpers/constant";

export function Table<T extends { id: number }>({
  columns,
  data,
  customRowRender,
  type = "primary",
  disableAdd = false,
  hrefAdd = "#",
  disableDelete = false,
  disableAction = false,
  disableEdit = false,
  pagination = false,
  allDataCount = 0,
  currentPage = 0,
  onDelete,
  onEdit,
  onAdd,
  onClickRow,
  onNextPage,
  onPrevPage,
}: TableProps<T>) {
  const pageCounter = Math.round(allDataCount / CONSTANT.rows);
  return (
    <div className="table-wrapper">
      {!disableAdd && (
        <div className="btn-add-container">
          <Link to={hrefAdd} onClick={onAdd}>
            <Button variant="dark-primary">Ajouter</Button>
          </Link>
        </div>
      )}
      <div className={classNames("table-container", type)}>
        <table>
          <thead>
            <tr>
              {columns.map((column, i) => (
                <th key={i}>
                  {column.renderCell
                    ? column.renderCell(column.title)
                    : column.title}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customRowRender
              ? data.map((el, i) => (
                  <TR
                    key={i}
                    item={el}
                    onClickRow={(item) => onClickRow && onClickRow(item.id)}
                  >
                    {customRowRender(el, i)}
                    {!disableAction && (
                      <EditDelete
                        onDelete={() => onDelete && onDelete(el)}
                        onEdit={() => onEdit && onEdit(el)}
                      />
                    )}
                  </TR>
                ))
              : data.map((el, i) => (
                  <TR
                    key={i}
                    item={el}
                    onClickRow={(item) => onClickRow && onClickRow(item.id)}
                  >
                    <TableRow item={el} />
                    {!disableAction && (
                      <EditDelete
                        onDelete={() => onDelete && onDelete(el)}
                        onEdit={() => onEdit && onEdit(el)}
                      />
                    )}
                  </TR>
                ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="pagination">
          <Button
            className="prev controller"
            size="sm"
            variant="dark-primary"
            onClick={onPrevPage}
            disabled={currentPage == 1}
          >
            <ChevronLeftIcon />
          </Button>
          <div className="page">
            {currentPage} sur {pageCounter == 0 ? 1 : pageCounter}
          </div>
          <Button
            className="next controller"
            size="sm"
            variant="dark-primary"
            onClick={onNextPage}
            disabled={currentPage * CONSTANT.rows >= allDataCount}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      )}
    </div>
  );
}

type TableProps<T extends { id: number }> = {
  data: T[];
  columns: ColumnTable[];
  customRowRender?: (item: T, index: number) => JSX.Element;
  type?: AlertVariant;
  hrefAdd?: string;
  disableAdd?: boolean;
  disableAction?: boolean;
  disableEdit?: boolean;
  disableDelete?: boolean;
  allDataCount?: number;
  currentPage?: number;
  pagination?: boolean;
  onAdd?: () => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onClickRow?: (id: number) => void;
  onNextPage?: () => void;
  onPrevPage?: () => void;
};

export type ColumnTable = {
  title: string;
  renderCell?: (title: string) => JSX.Element;
};
