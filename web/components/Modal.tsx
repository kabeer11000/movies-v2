import {HandThumbUpIcon, PlusIcon, XMarkIcon,} from '@heroicons/react/24/outline'
import MuiModal from '@mui/material/Modal'
import {useEffect, useRef, useState} from 'react'
import {useRecoilState} from 'recoil'
import {modalState, movieState} from '../atoms/modalAtom'
import {Genre} from '../typings'
import {useMediaQuery} from "@mui/material";

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useRecoilState(movieState)
    if (!movie) return null;
    const [trailer, setTrailer] = useState('')
    const [genres, setGenres] = useState<Genre[]>([])
    const [muted, setMuted] = useState(true)
    const [hidden, setHidden] = useState(false)
    const player = useRef(null)
    const matches = useMediaQuery('(min-width:600px)')
    const handleClose = () => {
        setShowModal(false)
    }
    useEffect(() => {
        if (!hidden) setTimeout(() => setHidden(true), 100);
    }, [hidden])
    console.log(trailer)
    return (
        <MuiModal
            open={showModal}
            onClose={handleClose}
            className={`fixex left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll !top-7 rounded-md ${matches ? 'scrollbar-hide h-screen' : ''}`}
        >
            <>
                <button
                    onClick={handleClose}
                    className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
                >
                    <XMarkIcon className="h-6 w-6"/>
                </button>

                <div className="relative pt-[56.25%]">
                    <iframe onClick={() => {
                        console.log('hidden false')
                        setHidden(false)
                    }} allowTransparency allowFullScreen
                            src={`https://docs.cloud.kabeers.network/static/movies/player.php?hash=${movie?.torrents?.at(-1)?.hash}&title=${movie?.title}&poster=${movie.background_image}`}
                            style={{
                                width: "100%",
                                position: 'absolute',
                                top: '0',
                                backgroundColor: "black",
                                overflow: "hidden",
                                left: '0',
                                height: "100.1%"
                            }} className={muted ? "muted" : "not-muted"}></iframe>
                    {/*<video width="100%"*/}
                    {/*       height="100%"*/}
                    {/*       style={{ position: 'absolute', top: '0', left: '0' }}*/}
                    {/*       autoPlay controls src={`magnet:?xt=urn:btih:${movie?.torrents?.at(-1)?.hash}&dn=${encodeURIComponent(movie?.title)}`}*/}
                    {/*       poster={movie.background_image} data-title={movie?.title}>*/}
                    {/*<track srcLang="en" label="test" default*/}
                    {/*       src="https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt"/>*/}
                    {/*</video>*/}
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        {!hidden && <div className="flex space-x-2">
                            {/*<button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">*/}
                            {/*  <FaPlay className="h-7 w-7 text-black" />*/}
                            {/*  Play*/}
                            {/*</button>*/}

                            <button className="modalButton">
                                <PlusIcon className="h-7 w-7"/>
                            </button>

                            <button className="modalButton">
                                <HandThumbUpIcon className="h-7 w-7"/>
                            </button>
                        </div>}
                        {/*<button className="modalButton" onClick={() => setMuted(!muted)}>*/}
                        {/*  {muted ? (*/}
                        {/*    <SpeakerXMarkIcon className="h-6 w-6" />*/}
                        {/*  ) : (*/}
                        {/*    <SpeakerWaveIcon className="h-6 w-6" />*/}
                        {/*  )}*/}
                        {/*</button>*/}
                    </div>
                </div>

                <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
                    <div className="space-y-6 text-lg">
                        <div className="flex items-center space-x-2 text-sm">
                            <p className="font-semibold text-green-400">
                                {movie!.rating * 10}% Match
                            </p>
                            <p className="font-light">
                                {movie?.date_uploaded || movie?.date_uploaded_unix}
                            </p>
                            <div
                                className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                HD
                            </div>
                        </div>

                        <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                            <p className="w-5/6">{movie?.summary}</p>
                            <div className="flex flex-col space-y-3 text-sm">
                                <div>
                                    <span className="text-[gray]">Genres: </span>
                                    {genres.map((genre) => genre.name).join(', ')}
                                </div>

                                <div>
                                    <span className="text-[gray]">Original language: </span>
                                    {movie?.language}
                                </div>

                                <div>
                                    <span className="text-[gray]">Total votes: </span>
                                    {movie?.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </MuiModal>
    )
}

export default Modal
