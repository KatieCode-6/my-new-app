import React, { useState } from 'react'
import axios from 'axios'


// children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

// data tunes
interface SongFromITunes {
        trackId: number
        artistName: string
        previewUrl: string
        artworkUrl100: string
        trackName: string
        collectionName: string
        kind?: string

}


// component
const Tunes: React.FC = () => {
   

    // state 
    const [songs, setSongs] = useState([])
    
    
    // callback
    const handleSearch = (query: string) => {
        axios.get(
            `https://itunes.apple.com/search?term=${encodeURI(query)}&entity=musicTrack&limit=5`
    ).then(response => {
        let iTunesSongs = response.data.results.filter(
            (song: any) => song.kind === 'song'
        ).map( (song: any) => extractData(song))
        setSongs(iTunesSongs)
    })
       
    }
    
    const extractData = ({ 
        trackId: id,
        artistName: artist,
        previewUrl: audioFile,
        artworkUrl100: artwork,
        trackName: title,
        collectionName: album
    }: SongFromITunes) => {
        return { id, artist, audioFile, artwork, title, album }
    }

    

    // template
    return (
        <article className="tunes">
            <h1>Tunes</h1>
            
            <TunesSearchForm onSearch={handleSearch} />
            
            
            <TunesList songs={songs} />
        </article>
    )
}

export default Tunes
