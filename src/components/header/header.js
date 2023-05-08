import Logo from '../../Assets/Logo.svg'
const Header=(props)=>{
    return (
        <header className='header'>
         <img src={Logo}alt="logo" style={{width: "100px", height: "50px"}}></img>
        </header>
    );
}

export default Header;