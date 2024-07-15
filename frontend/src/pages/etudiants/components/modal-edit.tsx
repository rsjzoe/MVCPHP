import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import "./modal.css";
import { useState } from "react";
import { EtudiantService, Student } from "../etudiant.service";
import { Modal } from "./modal";

export function ModalEdit({ students, onClose }: ModalEditProps) {
  const [first_name, setFirstName] = useState(students.first_name);
  const [last_name, setLastName] = useState(students.last_name);

  return (
    <Modal title="Modifier un étudiant" onClose={onClose}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (first_name && last_name) {
            const newData = await EtudiantService.create({
              last_name,
              first_name,
            });
            // TODO : don't reload
            if (newData) location.reload()
          }
        }}
      >
        <Input
          label="Nom : "
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Prénom : "
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Button>Modifier</Button>
      </form>
    </Modal>
  );
}

type ModalEditProps = {
  students: Student;
  onClose: () => void;
};
