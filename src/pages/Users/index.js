import React, { useEffect, useState } from "react";

import api from '../../config/configApi';

import { Link, useLocation } from "react-router-dom";

export function Users() {

    const { state } = useLocation();    

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: state ? state.type : '',
        mensagem: state ? state.mensagem : ''
    });

    const getUsers = async () => {

        const headers = {
            'headers': {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }

        await api.get('/users', headers)
        .then((response) => {
            console.log(response);
            setData(response.data.users);
        }).catch((err) => {
            if(err.response) {
                setStatus({
                    type: 'error',
                    mensagem: 'err.reponse.data.mensagem'
                });
            }else {
                setStatus({
                    type: 'error',
                    mensagem: 'Erro: Tente mais tarde!'
                });
            }
        });
    }

    useEffect(() => {
        getUsers();
    },[]);

	const deleteUser = async (idUser) => {
		const headers = {
			'headers': {
				'Authorizaztion': "Bearer " + localStorage.getItem('token')
			}
		}
		await api.delte("/user/" + idUser, headers)
		.then((response) => {
			setStatus({
				type: 'success',
				mensagem: response.data.mensagem
			});
			getUsers();
		}).catch((err) => {
			if (err.response) {
				setStatus({
					type: 'error',
					mensagem: err.response.data.mensagem
				})
			} else {
				setStatus({
					type: 'error',
					mensagem: "Erro: Tente mais tarde!"
				});
			}
		})
	}

    return (
        <>
            <Link to="/dashboard">Dashboard</Link><br/>
            <Link to="/users">Usuarios</Link><br/>
            
            <h1>Lisar Usuarios</h1>

            <Link to="add-user">Cadastrar</Link><br/><hr/>

            {status.type === 'error' ? <p style={{color:'#ff0'}}>{status.mensagem}</p> : ""}
            {status.type === 'success' ? <p style={{color:'green'}}>{status.mensagem}</p> : ""}

            {data.map(user => (
                <div key={user.id}>
                    <span>{user.id}</span><br/>
                    <span>{user.name}</span><br/>
                    <span>{user.email}</span><br/>
                    <Link to={"/view-user/" + user.id}><button type="button">Visulaizar</button></Link><br/><hr/>
					<Link to={"/edit-user/" + user.id}><button type="button">Editar</button></Link><br/>
                    <hr/>
					<Link to={"/edit-user/" + user.id}><button type="button" onClick={() => deleteUser(user.id)}>Apagar</button></Link><br/>
                    <hr/>
                </div>
            ))}
        </>
    );
}