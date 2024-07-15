import {Link} from "react-router-dom";
import "./dashboard.css";
import CalendarComponent from "./calendrier/calendrier";
import PieChartComponent from "./diagramme/diagramme";
import LineChartComponent from "./courbe/courbe";

export function Dashboard(props) {
    return <>
    <div>
        <div className="contenueDashboard">
            <div className="infoGenerale">
                <div className="nombreClasse">
                    <h2 className="TitreNombre">Nombre Totale de Classe</h2>
                    <p className="nombre">01</p>
                </div>
                <div className="nombreEleve">
                    <h2 className="TitreNombre">Nombre Totale d' eleve</h2>
                    <p className="nombre">30</p>
                </div>
                <div className="nombreEleve">
                    <h2 className="TitreNombre">Nombre Totale des abscents</h2>
                    <p className="nombre">05</p>
                </div>
                <div className="nombreEleve">
                    <h2 className="TitreNombre">Nombre Totale des retards</h2>
                    <p className="nombre">20</p>
                </div>
            </div>
            <div className="calendrier">
                <CalendarComponent/>        
            </div>

            <div className="state">
                <div className="diagramme">
                    <PieChartComponent/>
                </div>  

                <div className="courbe">
                    <LineChartComponent/>
                </div> 
            </div>

           
            
        </div>
        <Link to={'/etudiants'}>etudiants</Link>
    </div>
    </>
}
