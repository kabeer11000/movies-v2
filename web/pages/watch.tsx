import Head from 'next/head'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { Movie } from '../typings'
import requests from '../utils/requests'
import useGenres from "../hooks/useGenres";
import { RequestContext } from 'next/dist/server/base-server'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const Watch = ({movie}) => {
    const [, setShowModal] = useRecoilState(modalState)
    const [, setCurrentMovie] = useRecoilState(movieState);
    const router = useRouter();
    useEffect(() => {
        if (movie) {
            setCurrentMovie(movie)
            setShowModal(true);
            router.push('/');
        }
        else router.push('/');
    }, [router.isReady])

    return (
        <div
            className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}
        >
            <Head>
                <title>Sharing - {process.env.NEXT_PUBLIC_SITE_NAME}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
export default Watch;
export const getServerSideProps = async ({ query }: RequestContext) => {
    if (query.id) {
        return { props: { movie: await fetch(requests.fetchMovie(query.id)).then(res => res.json()).then(res => res.data.movie) } };
    }
    return {
        props: {
            movie: null
        },
    }
}
