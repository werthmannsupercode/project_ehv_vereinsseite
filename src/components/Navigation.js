import { Link } from "react-router-dom";
import "./../styles/NavigationStyle.css";

const Navigation = () => {
    return (<nav>
        <h1>Eigenheimer-Vereinigung Waigolshausen-Theilheim e.V.</h1>
        <ul>
            <li><Link to="/">Startseite</Link></li>
            <li><Link to="/ueberuns">Über uns</Link></li>
            <li><Link to="/mitgliedwerden">Mitglied werden</Link></li>
            <li><Link to="/jahresablauf">Jahresablauf</Link></li>
            <li><Link to="/aktivwerden">Aktiv werden</Link></li>
        </ul>
    </nav>);
}

export default Navigation;