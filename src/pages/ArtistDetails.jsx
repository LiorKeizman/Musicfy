import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery} from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const {id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  
  const { data: artistData, isFetching: isFetchingArtistDetails ,error } = useGetArtistDetailsQuery({ artistId });
console.log(artistData?.data[0].attributes);
  if (isFetchingArtistDetails) return <Loader title="Searching artists details" />;


  if (error) return <Error />;


  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />
<div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Name:</h2>

        <div className="mt-5">
          {artistData?.data[0]?.attributes?.name
            ? <p className="text-gray-400 text-base my-1">{artistData.data[0].attributes.name}</p>
            
            :<p className="text-gray-400 text-base my-1">Sorry, No name found!</p>
          }
        </div>
      </div>

<div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Date of birth:</h2>

        <div className="mt-5">
          {artistData.data[0].attributes.bornOrFormed
            ? <p className="text-gray-400 text-base my-1">{artistData.data[0].attributes.bornOrFormed}</p>
            
            :<p className="text-gray-400 text-base my-1">Sorry, No date of birth found!</p>
          }
        </div>
      </div>
<div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Origin:</h2>

        <div className="mt-5">
          {artistData.data[0].attributes.origin
            ? <p className="text-gray-400 text-base my-1">{artistData.data[0].attributes.origin}</p>
            
            :<p className="text-gray-400 text-base my-1">Sorry, No origin found!</p>
          }
        </div>
      </div>
<div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Artist Bio:</h2>

        <div className="mt-5">
          {artistData.data[0].attributes.artistBio
            ? <p className="text-gray-400 text-base my-1">{artistData.data[0].attributes.artistBio}</p>
            
            :<p className="text-gray-400 text-base my-1">Sorry, No bio was found!</p>
          }
        </div>
      </div>

    </div>
  );
};

export default ArtistDetails;