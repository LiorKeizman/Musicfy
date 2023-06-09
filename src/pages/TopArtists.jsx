import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { Error, Loader, SongCard ,ArtistCard} from '../components'

const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery()
  
    if (isFetching) return <Loader title='Loading top charts ' />

    if (error) return <Error />

    return (
        <div className='flex flex-col'>
            <h2 className='text-bold text-3X1 text-white mt-4 text-left mb-10'>Discover top artists</h2>
            <div className="flex flex-wrap sm:justify-start
             justify-center gap-8">
                {data?.map((track) => (
                    <ArtistCard
                        key={track.key}
                        track={track}
                    />
                ))}

            </div>
        </div>
    )



}

export default TopArtists;
