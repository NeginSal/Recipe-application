import { Link } from 'react-router-dom';
import './Navbar.css'
import Search from './Search';

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'><h1>Cooking Ninja</h1></Link>
                <Search/>
                <Link to="/create">Create Recipe</Link>
            </nav>

        </div>
     );
}
 
export default Navbar;