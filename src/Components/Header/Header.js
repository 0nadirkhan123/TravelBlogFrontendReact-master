import frontscreen from '../../Assets/front.jpg';
import './Header.css';
import logo from '../../Assets/logo.jpg';
import { Link } from 'react-router-dom';

function Header()
{
    return (
        <div className='headercontainer'>
        <img src={frontscreen} alt='front' height='100%' width='100%' className='img'/>
        <div className='navigation'>
            <nav>
                <h3><Link to="/" className='register'>About</Link></h3>
                <h3>Blog</h3>
                <h3>Youtube</h3>
                <h3>Solo Travel</h3>
            </nav>
            <img src={logo} width='100' height='100px' className='logo'/>
            <nav>
                <h3>Tours</h3>
                <h3>Destinations</h3>
                <h3>Travel Resources</h3>
                <h3><Link to="/login" className='register'>Login</Link></h3>
                <h3><Link to="/register" className='register'>Register</Link></h3>
            </nav>
        </div>
        </div>
    );
}

export default Header;
