import React, { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch ('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
        } catch (err) {
            setError(err.response.data);
        }
    }
    
    
    
    return (
    <form className="register" onSubmit={handleSubmit}>
        <h1>Register </h1>    
        <input  type="text" 
                placeholder="username"
                value={username}
                onChange={e => setUsername = e.target.value} />
        <input  type="password" 
                placeholder="password" 
                value={password}
                onChange={e => setPassword = e.target.value}    
                />
        <button>Register</button>
    </form>
    );
}
