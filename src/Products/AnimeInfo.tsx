import React from 'react'

interface IAnimeInfoProps {
    name: string,
    age: number,
    logo: string
}

const AnimeInfo: React.FC<IAnimeInfoProps> = ({ name, age, logo }) => {
    return(
        <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{logo}</p>
        </>
    )
}

export default AnimeInfo