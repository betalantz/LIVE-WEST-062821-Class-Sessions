import React from 'react'
import { Header } from 'semantic-ui-react'

export default function CraftList({craft}) {
    return (
        <>
            <Header size="large">
                List of all Spacecraft
            </Header>
            <ul>
                {craft.map(c => <li key={c.id}>{c.name} | {c.type} | {c.registration}</li>)}
            </ul>
        </>
    )
}
