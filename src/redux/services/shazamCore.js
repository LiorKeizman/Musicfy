import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '93862e019fmshb1cc109f63317d2p1c48bajsnf1f301b68eee',
// 		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify81.p.rapidapi.com/top_20_by_followers', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    // export const shazamCoreApi = createApi({
    //     reducerPath:'shazamCoreApi',
    //     baseQuery: fetchBaseQuery({
    //         baseUrl:'https://genius-song-lyrics1.p.rapidapi.com/',
    //         prepareHeaders:(headers) => {
    //             headers.set('X-RapidAPI-Key', '93862e019fmshb1cc109f63317d2p1c48bajsnf1f301b68eee')
             
    //          return headers
    //         }
    //     }),
    //     endpoints: (builder) => ({
    //         getTopFollowers : builder.query({query: () => 'chart/songs/'})
    //     }),
    // })
    // export const {
    //    useGetTopFollowersQuery
    // } = shazamCoreApi

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '93862e019fmshb1cc109f63317d2p1c48bajsnf1f301b68eee',
    //         'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=month&per_page=10&page=1', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

        export const shazamCoreApi = createApi({
                reducerPath:'shazamCoreApi',
                baseQuery: fetchBaseQuery({
                    baseUrl:'https://shazam-core.p.rapidapi.com/',
                    prepareHeaders:(headers) => {
                        headers.set('X-RapidAPI-Key', '93862e019fmshb1cc109f63317d2p1c48bajsnf1f301b68eee')
                     
                     return headers
                    }
                }),
                endpoints: (builder) => ({
                    getTopCharts : builder.query({query: () => 'v1/charts/world'}),
                    getSongDetails: builder.query({query: ({songid}) => `v1/tracks/details?track_id=${songid}`}),
                    getSongRelated: builder.query({query: ({songid}) => `v1/tracks/related?track_id=${songid}`}),
                    getArtistDetails: builder.query({query: ({artistId}) => `v2/artists/details?artist_id=${artistId}`}),
                    getSongsByCountry: builder.query({query: (countryCode) => `v1/charts/country?country_code=${countryCode}`}),
                    getSongsByGenre: builder.query({query: (genreCode) => `v1/charts/genre-world?genre_code=${genreCode}`}),
                    getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
                }),
            })
            export const {
               useGetTopChartsQuery,
               useGetSongDetailsQuery,
               useGetSongRelatedQuery,
               useGetArtistDetailsQuery,
               useGetSongsByCountryQuery,
               useGetSongsByGenreQuery,
               useGetSongsBySearchQuery,
            } = shazamCoreApi
            // `v1/charts/country?country_code=${countryCode}`