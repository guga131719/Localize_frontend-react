// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import CpfForm from './components/CpfForm';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user) => {
        setLoggedIn(true);
        setUsername(user);
    };

    const handleCpfSubmit = (cpf) => {
 
    };

    return (
        <div>
            {loggedIn ? (
                <CpfForm onSubmit={handleCpfSubmit} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
