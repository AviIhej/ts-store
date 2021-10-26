import React from 'react'

// using props interface we can specify the type of the component
// Generic is passed in for the props
interface IAnimeListProps {
    name: string,
    logo: string
}


const AnimeList: React.FC<IAnimeListProps> = ({ name, logo }) => {

    return (
        <div>
            <div>{name}</div>
            <img alt="logo" src={logo} />
        </div>
    )
}

export default AnimeList