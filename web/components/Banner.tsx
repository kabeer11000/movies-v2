import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
    movies: Movie[]
}

function Banner({ movies: netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${movie?.background_image_original || movie?.background_image || "/vercel.svg"}`}
          layout="fill"
          objectFit="cover"
          alt={movie?.title || movie?.title_english || movie?.title_english || "untitled"}
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.title_english || movie?.title_long}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.summary.slice(0, 100)}...
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black" onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true);
        }}>
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Banner
