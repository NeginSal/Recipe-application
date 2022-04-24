import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css'
const Search = () => {

    const [term, setTerm] = useState('')
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Navigate(`/search?q={$term}`)

    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search:</label>
                <input
                    type="text"
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>

        </div>
    );
}

export default Search;