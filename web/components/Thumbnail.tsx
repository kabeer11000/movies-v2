import Image from 'next/image'
import {useRecoilState} from 'recoil'
import {modalState, movieState} from '../atoms/modalAtom'
import {Movie} from '../typings'

interface Props {
    // When using firebase
    movie: Movie
}

function Thumbnail({movie}: Props) {
    const [, setShowModal] = useRecoilState(modalState)
    const [, setCurrentMovie] = useRecoilState(movieState)
    return (
        <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            onClick={() => {
                setCurrentMovie(movie)
                setShowModal(true)
            }}>
            <Image
                src={movie.large_cover_image ?? movie.medium_cover_image ?? movie.background_image_original ?? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"}
                className="rounded-sm object-cover md:rounded"
                layout="fill"
                alt=""
            />
        </div>
    )
}

export default Thumbnail
