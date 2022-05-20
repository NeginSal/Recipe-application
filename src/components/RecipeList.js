import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'

export default function RecipeList({recipes}) {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className='error'>No recipes to load ...</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(user=> (
        <div key={user.id} className={`card ${mode}`}>
          <h3>{user.name}</h3>
          <p>{user.website}</p>
          <Link to={`/users/${user.id}`}>Contact</Link>
        </div>
      ))}
    </div>
  )
}