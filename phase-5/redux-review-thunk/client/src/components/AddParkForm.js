import React, { useState } from 'react'

export default function AddParkForm() {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e){
        e.preventDefault()

    }

    return (
        <div>
            <h2>Add a park</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Park name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Add Park</button>
            </form>
        </div>
    )
}
