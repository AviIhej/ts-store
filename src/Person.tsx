import React from 'react'

interface IPersonProps {
    name: string
}

export const Person: React.FC<IPersonProps> = ({ name }) => {
    return <div>My name is {name}</div>
}


export function OtherPerson(props: IPersonProps){

    const { name } = props

    return (
        <div>
            <p>My name is {name}</p>
        </div>
    )
}


export const PersonThree = (props: IPersonProps) => {
    return(
        <div></div>
    )
}

export const PersonFour = ({ name }: { name: string }) => {
    
}

export default Person