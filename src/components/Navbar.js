import { Link } from 'react-router-dom';
import './Navbar.css'
import Searchbar from './Searchbar';
import {useTheme} from '../hooks/useTheme'

const Navbar = () => {

    const { color } = useTheme()

    return (
        <div className='navbar' style={{ background: color }}>
            <nav>
                <Link to="/" className='brand'><h1>Cooking Ninja</h1></Link>
                <Searchbar />
                <Link to="/create">Create Recipe</Link>
            </nav>

        </div>
    );
}

export default Navbar;