import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'><h1>Cooking Ninja</h1></Link>
                <Link to="/create">Create Recipe</Link>
            </nav>

        </div>
     );
}
 
export default Navbar;