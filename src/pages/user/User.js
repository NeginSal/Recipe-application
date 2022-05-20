import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { Link } from 'react-router-dom'
// styles
import './User.css'

const Recipe = () => {
    const { id } = useParams()
    const url = 'https://jsonplaceholder.typicode.com/users/' + id
    const { error, isPending, data: recipe } = useFetch(url)
    const { mode } = useTheme()

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.name}</h2>
                    <p> {recipe.email}</p>
                    <p> {recipe.phone}</p>
                    <ul>
                        <li>{recipe.address.city}  </li>
                        <li>{recipe.address.street}  </li>
                        <li>{recipe.address.zipcode}</li>
                    </ul>
                    <Link to="/"><button>Back To Home</button></Link>

                </>
            )}
        </div>
    )
}
export default Recipe;