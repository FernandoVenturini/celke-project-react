import React, { useState } from "react";

// IMPORTANDO FUNCAO DO REACT-ROUTER-DOM
import { useHistory } from 'react-router-dom';

// IMPORTANDO CONFIGAPI
import api from '../../config/configApi';

export const Login = () => {

    const history = useHistory();

    // VARIAVEIS PARA SALVAR OS VALORES DIGITADO NOS INPUTS
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // VARIAVEIS QUE VAO APRESENTAR MSG DE ERRO OU SUCESSO
    const [status, setStatus] = useState({
        type: '',
        mensagem: '',
        loading: false
    });

    // VARIAVEIS PARA RECEBER OS VALORES DIGITADO NOS INPUTS
    const valorInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    // ENVIANDO O FORMULARIO
    const loginSubmit = async (e) => {
        e.preventDefault(); // PREVINE O CARREGAMENTO DA PAGINA
        setStatus({
            loading: true
        });
        // console.log(user.email);
        // console.log(user.password);

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post('/login', user, {headers})
        .then((response) => {
            //console.log(respponse);
            setStatus({
                /*type: 'success',
                mensagem: response.data.mensagem,*/
                loading: false
            });
            // SALVANDO OS DADOS NO LOCALSTORAGE
            localStorage.setItem('token', JSON.stringify(response.data.token))
            // REDIRECIONANDO USUARIO PARA A PAGINA DASHBOARD APOS FAZER LOGIN
            return history.push('/dashboard');
        }).catch((err) => {
            if(err.response) {
                //console.log(err.response);
                setStatus({
                    type: 'error',
                    mensagem: err.response.data.mensagem,
                    loading: false
                });
            }else {
                //console.log('Erro: tente mais tarde');
                setStatus({
                    type: 'error',
                    mensagem: 'Erro: tente mais tarde!',
                    loading: false
                })
            }
        })
    }

    return (
        <>
            <h1>Login</h1>

                {status.type === 'error' ? <p>{status.mensagem}</p> : ''}     
                {status.type === 'success' ? <p>{status.mensagem}</p> : ''}
                {status.loading ? <p>Validando...</p> : ''}

            <form onSubmit={loginSubmit}> {/*ENVIA O FORMULARIO*/}

                <label>Usuario: </label>
                <input
                    type="text"
                    name="email"
                    placeholder="Digite o e-mail..."
                    onChange={valorInput}
                /><br /><br />

                <label>Senha: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Digite a senha..."
                    onChange={valorInput}
                    autoComplete="on"
                /><br /><br />                

                {status.loading ? <button type="submit" disabled>Acessando...</button> : <button type="submit">Acessar...</button>}

            </form>
        </>
    );
}