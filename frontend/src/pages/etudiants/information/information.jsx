import { useState } from "react";
import "./info.css";
import classNames from "classnames";
import { Link, Outlet } from "react-router-dom";
export function Information(props) {
  const [activeTab, setActiveTab] = useState("parents");

  const studentData = {
    nom: "Doe",
    prenom: "John",
    classe: "10ème",
    dateNaissance: "15 Mai 2008",
    lieuNaissance: "Paris, France",
    numeroMatricule: "123456789",
    image: "https://via.placeholder.com/150",
    telephone: "+33 1 23 45 67 89",
    parents: {
      mother: "Jane Doe",
      father: "John Doe Sr.",
    },
    schoolFees: {
      due: "$500",
      paid: "$1000",
    },
    grades: {
      math: "A",
      science: "B+",
      english: "A-",
    },
    attendance: {
      present: 150,
      absent: 5,
    },
  };

  return (
    <div className="student-info-container">
      <div className="student-header bg-white-shadow">
        <div className="student-basic-info">
          <p>
            <span className="dark-t">Nom: </span> {studentData.nom}
          </p>
          <p>
            <span className="dark-t">Prenom: </span> {studentData.prenom}
          </p>
          <p>
            <span className="dark-t">Classe: </span> {studentData.classe}
          </p>
          <p>
            <span className="dark-t">Date de Naissance: </span>
            {studentData.dateNaissance}
          </p>
          <p>
            <span className="dark-t">Lieu de Naissance: </span>
            {studentData.lieuNaissance}
          </p>
          <p>
            <span className="dark-t">Numéro Matricule: </span>
            {studentData.numeroMatricule}
          </p>
          <p>
            <span className="dark-t">Téléphone: </span>
            {studentData.telephone}
          </p>
        </div>
        <div className="student-img-info">
          <div className="student-img-container">
            <img
              src={studentData.image}
              alt={`${studentData.prenom} ${studentData.nom}`}
              className="student-image"
            />
            <p>John doe</p>
          </div>
        </div>
      </div>
      <div className="tabbar">
        <Link
          to={""}
          onClick={() => setActiveTab("parents")}
          className={classNames(
            activeTab === "parents" ? "active" : "",
            "tab1"
          )}
        >
          Parents
        </Link>
        <Link
          to={"ecolage"}
          onClick={() => setActiveTab("schoolFees")}
          className={activeTab === "schoolFees" ? "active" : ""}
        >
          Écolage
        </Link>
        <Link
          to={"notes"}
          onClick={() => setActiveTab("grades")}
          className={activeTab === "grades" ? "active" : ""}
        >
          Notes
        </Link>
        <Link
          to={"presence"}
          onClick={() => setActiveTab("attendance")}
          className={classNames(
            activeTab === "attendance" ? "active" : "",
            "tab4"
          )}
        >
          Présence
        </Link>
      </div>
      <div className="info-content bg-white-shadow">
        <div className="tab-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
