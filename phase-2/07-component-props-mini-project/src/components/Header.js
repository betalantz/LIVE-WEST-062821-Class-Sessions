import React from 'react'

export default function Header({name}) {
    // console.log('props: ', props);

    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}
