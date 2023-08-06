import './Footer.css'

export default function Footer() {
    return(
        <footer className = "footer">
            <ul>
                <div className="nav-right">
                    <li><div className="logo-name">Planter</div></li>
                    <li><a className="footer-link" href="mailto:ischool@uw.edu"><span class="material-icons">email</span> ischool@uw.edu</a></li>
                    <li><a className="footer-link" href="https://github.com/info340-su23/project-vuongb2"><span class="material-icons">code</span> GitHub</a></li>
                    <li>&copy; INFO 340 Group A7 2023</li>
                </div>
            </ul>
        </footer>
    );
}
