import React, { useContext, useEffect, useState } from "react";
import axios from "axios"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [movies, setMovies] = useState([])

    //get movies by genre and page
    const getMovies = async (genre = null, page = 1) => {

        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles',
            params: {
                titleType: 'movie',
                genre: genre,
                limit: '30',
                list: "most_pop_movies",
                page: page
            },
            headers: {
                'X-RapidAPI-Key': '8f7979904emsh4a129cc53b9b4efp1d3bbdjsn00538664a292',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options)

            setMovies(response.data.results)

        } catch (erro) {
            console.log(erro)
        }

    }

    const getGenres = async () => {

        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres',
            headers: {
                'X-RapidAPI-Key': '8f7979904emsh4a129cc53b9b4efp1d3bbdjsn00538664a292',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios(options)

            return response.data
        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    const genres = getGenres()

    return (
        <AppContext.Provider value={{ movies }}>
            {children}
        </AppContext.Provider>
    )


}

export default AppProvider

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { useGlobalContext } 