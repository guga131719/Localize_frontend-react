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
        // Aqui você pode fazer a requisição para a API com o CPF informado.
        // Exemplo de requisição usando axios:
        // axios.post('https://sua-api.com/alguma-rota', { cpf })
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
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
