import './Header.css'
import logo from '../assets/img/heart.png'
export default function Header() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand logo" href="#"><img src={logo} alt="no hay" />home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">u</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">i</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}