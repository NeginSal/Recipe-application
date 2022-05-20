import RecipeList from '../../components/RecipeList';
import {useFetch} from '../../hooks/useFetch'
import './Home.css'

const Home = () => {
    const { data, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading ...</p>}
            {data&& <RecipeList recipes={data}/>}
        </div>
    );
}

export default Home;