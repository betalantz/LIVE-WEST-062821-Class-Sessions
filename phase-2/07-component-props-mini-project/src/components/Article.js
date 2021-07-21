// import React from 'react'

function createEmojiString(minutes){
    let eString = ""
    const interval = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? "☕" : "🍱"
    for (let i=0; i < minutes; i += interval){
        eString += emoji
    }
    return eString
}

export default function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let emojis = createEmojiString(minutes)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}
