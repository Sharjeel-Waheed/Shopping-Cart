import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { allowUser } from './Service';
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await allowUser(username, password);
            console.log(response);
            if (response.token) {
                localStorage.setItem('token', response.token);
                navigate('/');
            } else {
                setError('Login failed. Please enter a correct username or password.');
            }
        } catch (err) {
            setError('An error occurred while logging in.');
            console.error(err);
        }
    };

    return (
        <div className="login">

            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text"
                    placeholder="Email or Phone"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <label for="password">Password</label>
                <input type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleLogin}>Log In</button>
                <p>{error}</p>
            </form>
        </div>
    )
}

export default Login



// username: 'kminchelle',
//     password: '0lelplR',