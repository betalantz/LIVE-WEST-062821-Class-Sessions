import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';

export default function AuthForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
            email: "",
            password: ""
        })
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input 
                    name="email"
                    label="Email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Form.Input 
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
        </Form>
    )
}
