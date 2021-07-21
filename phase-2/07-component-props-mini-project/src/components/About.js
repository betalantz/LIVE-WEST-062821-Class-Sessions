import React from 'react'

export default function About({ about, image = 'https://via.placeholder.com/215'}) {
    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}
