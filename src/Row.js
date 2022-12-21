import React, {useState, useEffect} from 'react'
import axios from './requestFabric';
import ScrollContainer from "react-indiana-drag-scroll"
const Row = ({ title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(fetchUrl)
            console.log(res.data.results)
            setMovies(res.data.results)
            return res
        }
        fetchData()
        
    }, [fetchUrl])

    return (
        <div className={`outside-row-container ${isLargeRow ? "" : "outside-row-container-backdrop"}`}>
            <h2 className="app-title">{title}</h2>
            <div className="app-row">

                <ScrollContainer vertical={false} className="row-container">
                    {movies.map((movie, idx) => 
                    (
                        <div key={idx} className="row-content">
                            <img className="movie-poster" src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={idx} />
                            <p className="movie-name">
                            {movie.title ? movie.title : movie.name}
                            </p>
                        </div>
                    ))}
                </ScrollContainer>
            </div>
        </div>
        
    )
}

export default Row
