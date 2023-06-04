
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.svg"
const Footer=(props)=>{
    return (
    <footer id="footer">
        <section>

            <img  src={logo} alt="logo"></img>

        </section>
        <section id="footer_links">
        <section>
            <h3>Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to="reserve" >Reservations</Link></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>

        </section>
        <section>

            <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone</li>
                <li>Email</li>
            </ul>

        </section>
        <section>

            <h3>Social Media</h3>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>

        </section>
        </section>

    </footer>
    );
}

export default Footer;