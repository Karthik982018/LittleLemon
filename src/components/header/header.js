import Logo from '../../Assets/Logo.svg'
import Navigation from '../navigation/navigation';
const Header=(props)=>{
    return (
        <header className='header'>
         <img src={Logo}alt="logo" style={{width: "100px", height: "50px"}}></img>
         <Navigation></Navigation>
        </header>
    );
}

export default Header;