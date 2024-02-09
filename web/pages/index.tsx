import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { Movie } from '../typings'
import requests from '../utils/requests'
import useGenres from "../hooks/useGenres";

interface Props {
    movies: { type: string, items: Movie[] }[],
}

const Home = ({
    movies
}: Props) => {
    const { loading } = useAuth();
    const showModal = useRecoilValue(modalState);


    if (loading) return null

    return (
        <div
            className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${showModal && '!h-screen overflow-hidden'
                }`}
        >
            <Head>
                <title>Home - {process.env.NEXT_PUBLIC_SITE_NAME}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
                <Banner movies={movies[0].items} />
                <section className="md:space-y-24">
                    {movies.slice(1).map((movies, index) => (
                        <Row key={index} title={movies.type} movies={movies.items} />)
                    )}
                </section>
            </main>
            {showModal && <Modal />}
        </div>
    )
}

export default Home

export const getStaticProps = async () => {
    const genres = useGenres();
    const movies = await Promise.all(genres.map(genre =>
        fetch(requests.fetchMovies(genre)).then((res) => res.json()).then(res => res.data.movies)));
    // (await import('fs')).writeFileSync('/Users/asadrizvi/Documents/Projects/moviesv2/web/public/res.json', JSON.stringify(movies));
    // const movies = JSON.parse((await import('fs')).readFileSync('/Users/asadrizvi/Documents/Projects/moviesv2/web/public/res.json').toString())
    return {
        props: {
            movies: genres.map((genre, index) => ({ type: genre, items: movies[index] }))
        },
    }
}
