const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
    fetchMovies: (genre: string) => `https://yts.mx/api/v2/list_movies.json?genre=${genre}`,
    fetchMovie: (id: string) => `https://yts.mx/api/v2/movie_details.json?imdb_id=${id}`,
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests
