import React, { useState } from 'react'
import { Form, Header } from 'semantic-ui-react';

export default function SpacecraftForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        registration: ""
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(){
        onSubmit(formData)
        setFormData({
            name: "",
            type: "",
            registration: ""
        })
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Header size="medium">Create a spacecraft</Header>
            <Form.Group widths="equal">
                <Form.Input 
                    fluid
                    name="name"
                    label="Name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Form.Input 
                    fluid
                    name="type"
                    label="Type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleChange}
                />
                <Form.Input 
                    fluid
                    name="registration"
                    label="Registration"
                    placeholder="Registration"
                    value={formData.registration}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
        </Form>
    )
}
