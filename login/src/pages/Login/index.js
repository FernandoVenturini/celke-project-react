import React, { useState } from 'react';

export const Login = () => {

    // USANDO USESTATE PARA RECEBER O QUE FOR DIGITADO NOS INPUTS:
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // CRIANDO FUNCAO PARA RECEBER OS VALORES:
    const valorInput = e => setUser({...user, [e.target.name]: e.target.value});

    const loginSubmit = async e => {
        e.preventDefault();
        console.log(user.email);
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={loginSubmit}>
                <label>Usuario: </label>
                <input type='text' name='email' placeholder='Digite o e-mail...' onChange={valorInput}/>

                <label>Senha: </label>
                <input type='password' name='password' placeholder='Digite a senha...' onChange={valorInput}/>

                <button type='submit'>Acessar</button>
            </form>
        </>
    );
}