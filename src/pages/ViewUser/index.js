import React, { use, useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import api from '../../config/configApi';

export const ViewUser = (props) => {

    const [data, setData] = useState('');

    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type:'',
        mensagem: '' 
    });

    // Fazendo requisicao API para pesquisar usuario:
    useEffect(() => {
        const getUser = async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            await api.get('/user/' + id, headers)
            .then((response) => {
                if(response.data.user) {
                    setData(response.data.user)
                }else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro! Usuario nao encontrado!"
                    });
                }

            }).catch((err) => {
                if(err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem
                    });
                }else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro! Tente mais tarde!"
                    });
                }
            })
        }
        getUser();
    },[id]);


    return (
        <>
            <Link to="/dashboard">Dashboard</Link><br/>
            <Link to="/users">Usuarios</Link><br/>

            <h1>Detalhes do Usuario</h1>

            <Link to="/users">Listar</Link><br/>

            {status.type === 'error' ? 
                <Redirect to={{
                    pathname: '/users',
                    state: {
                        type: status.type,
                        mensagem: status.mensagem
                    }
                }}/> : ""}
            {status.type === 'success' ? <p>{status.mensagem}</p> : ""}

            <span>{data.id}</span><br/>
            <span>{data.name}</span><br/>
            <span>{data.email}</span><br/>
        </>
    );
}