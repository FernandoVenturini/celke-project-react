import React, { useState } from 'react';

// IMPORTANDO CONFIGAPI:
import api from '../../config/configApi';

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
        //console.log(user.email);

        const headers = {
            'Content-Type': 'application/json'
        }

        //FAZENDO A CONEXAO COM API:
        await api.post('/login', user, {headers})
        .then((Response) => {
            console.log(response);
        }).catch((err) => {
            console.log('Erro: tente mais tarde!');
        });
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={loginSubmit}>
                <label>Usuario: </label>
                <input type='text' name='email' placeholder='Digite o e-mail...' onChange={valorInput}/><br/><br/>

                <label>Senha: </label>
                <input type='password' name='password' placeholder='Digite a senha...' onChange={valorInput}/><br/><br/>

                <button type='submit'>Acessar</button>
            </form>
        </>
    );
}