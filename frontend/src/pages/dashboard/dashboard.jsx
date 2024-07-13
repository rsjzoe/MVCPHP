import {Link} from "react-router-dom"
export function Dashboard(props) {
    return <>
    <div>
        <div>Dashboard</div>
        <Link to={'/etudiants'}>etudiants</Link>
    </div>
    </>
}
