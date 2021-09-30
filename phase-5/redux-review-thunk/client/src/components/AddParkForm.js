import React, { useState } from 'react'
import { addPark } from '../redux/actions'
import { useDispatch } from 'react-redux'

export default function AddParkForm() {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        const park = {
            name, 
            image,
            votes: 0
        }
        dispatch(addPark(park))
        setName("")
        setImage("")
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
