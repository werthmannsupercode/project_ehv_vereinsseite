import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './../styles/SidebarStyles.css';

const Sidebar = () => {
    return (
        <aside>
            <a href={"https://www.facebook.com/EigenheimerWaigolshausenTheilheim"}><FontAwesomeIcon icon={faFacebook} /></a>
            <Link to="#"><FontAwesomeIcon icon={faWhatsapp} /></Link>
        </aside>
    );
}

export default Sidebar;