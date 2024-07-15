import { useEffect, useState } from "react";
import { SelectOption } from "../../components/select-option/select-option";
import { Table } from "../../components/table/table";
import { classesOptions, classesToOption } from "./etudiants.filter-option";
import { useNavigate } from "react-router-dom";
import { EtudiantService } from "./etudiant.service";
import { ModalAdd } from "./components/modal-add";
import { ModalEdit } from "./components/modal-edit";

export function Etudiants(props) {
  const [classe, setClasse] = useState(null);
  // TODO : use react query
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState();

  useEffect(() => {
    new Promise(async (resolve) => {
      const data = await EtudiantService.find();
      setStudents(data);
      console.log(data);
      resolve("done");
    });
  }, []);

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
        data={students}
        hrefAdd="#"
        onAdd={() => setAdd(true)}
        onEdit={(student) => {
          // TODO : show modal and edit students
          setEdit(student);
        }}
        onDelete={async (student) => {
          // TODO : delete students
          const deleted = await EtudiantService.delete(student.id);
          setStudents(students.filter((el) => el.id !== student.id));
        }}
        onClickRow={(id) => {
          navigate("/information");
        }}
      />
      {add && <ModalAdd onClose={() => setAdd(false)} />}
      {edit && <ModalEdit students={edit} onClose={() => setEdit(null)} />}
    </div>
  );
}
