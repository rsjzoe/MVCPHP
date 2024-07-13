import { useState } from "react";
import { SelectOption } from "../../components/select-option/select-option";
import { Table } from "../../components/table/table";
import { classesOptions, classesToOption } from "./etudiants.filter-option";
import { useNavigate } from "react-router-dom";

export function Etudiants(props) {
  const [classe, setClasse] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="etudiants">
      <div className="filter-container">
        <SelectOption
          options={classesOptions}
          value={classesToOption(classe)}
          placeholder="classe..."
          onChange={(available) => {
            setClasse(available);
          }}
          clearable
        />
      </div>

      <Table
        columns={[{ title: "Numéro" }, { title: "Nom" }, { title: "Prénom" }]}
        data={[{ id: 1, nom: "aooonna", prenom: "!!!" }]}
        hrefAdd="#"
        onEdit={(student) => {
          // TODO : show modal and edit students
        }}
        onDelete={(students) => {
          // TODO : delete students
        }}
        onClickRow={(id) => {
          navigate("/information");
        }}
      />
    </div>
  );
}
