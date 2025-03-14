import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";

import api from '../../config/configApi';

export const AddUser = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const valueInput = (e) => setUser({...user, [e.target.name]: e.target.value});

    const addUser = async e => {
        e.preventDefault();

        const headers = {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        };

        await api.post('/user', user, headers)
        .then((response) => {
            setStatus({
                type: 'success',
                mensagem: response.data.mensagem
            });
        }).catch((err) => {
            if(err.response) {
                setStatus({
                    type: 'error',
                    mensagem: err.response.mensagem
                });
            }else {
                setStatus({
                    type: 'error',
                    mensagem: 'Erro, tente mais tarde!'
                });
            }
        })
    }

    return (
        <>
            <Link to="/dashboard">Dashboard</Link><br/>
            <Link to="/users">Usuarios</Link><br/>

            <h1>Cadastrar Usuario</h1>

            {status.type === 'error' ? <p>{status.mensagem}</p> : ''}
            {status.type === 'success' ? 
            <Redirect to={{
                pathname: '/users',
                state: {
                    type: 'success',
                    mensagem: status.mensagem
                }
            }}/>
            : ''}

            <form onSubmit={addUser}>
                <label>Nome: </label>
                <input type="text" name="name" placeholder="Nome completo do usuario..." onChange={valueInput}/><br/><br/>

                <label>E-mail: </label>
                <input type="email" name="email" placeholder="Melhor e-mail do usuario..." onChange={valueInput}/><br/><br/>

                <label>Senha: </label>
                <input type="password" name="password" placeholder="Senha para acessar o sistema..." autoComplete="on" onChange={valueInput}/><br/><br/>

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
};