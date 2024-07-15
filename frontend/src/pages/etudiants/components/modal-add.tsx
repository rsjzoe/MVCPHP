import { Input } from "../../../components/input/input";
import { Button } from "../../../components/button/button";
import "./modal.css";
import { useState } from "react";
import { EtudiantService } from "../etudiant.service";
import { Modal } from "./modal";

export function ModalAdd({ onClose }: ModalAddProps) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  return (
    <Modal title="Ajouter un étudiant" onClose={onClose}>
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
        <Button>Ajouter</Button>
      </form>
    </Modal>
  );
}

type ModalAddProps = {
  onClose: () => void;
};
