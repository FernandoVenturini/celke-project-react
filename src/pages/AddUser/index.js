// ETAPA 1: Importações necessárias
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from '../../config/configApi';

// ETAPA 2: Declaração do componente principal
export const AddUser = () => {

    // ETAPA 3: Estado para armazenar dados do usuário
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    // ETAPA 4: Estado para controlar mensagens de status
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    // ETAPA 5: Função para atualizar estado quando usuário digita nos campos
    const valueInput = (e) => setUser({...user, [e.target.name]: e.target.value});

    // ETAPA 6: Função principal para cadastrar usuário
    const addUser = async e => {
        // ETAPA 6.1: Previne comportamento padrão do formulário
        e.preventDefault();

        // ETAPA 6.2: Valida dados antes de enviar
		if (!validate()) return;

        // ETAPA 6.3: Configura headers da requisição
        const headers = {
            'headers': {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
                'Authorization': 'Bearer ' + localStorage.getItem('token') // Adiciona token de autorização
            }
        };

        // ETAPA 6.4: Faz requisição POST para API
        await api.post('/user', user, headers)
        .then((response) => {
            // ETAPA 6.5: Sucesso - atualiza status
            setStatus({
                type: 'success',
                mensagem: response.data.mensagem
            });
        }).catch((err) => {
            // ETAPA 6.6: Tratamento de erros
            if(err.response) {
                setStatus({
                    type: 'error',
                    mensagem: err.response.mensagem
                });
            }else {
                // ETAPA 6.7: Erro genérico
                setStatus({
                    type: 'error',
                    mensagem: 'Erro, tente mais tarde!'
                });
            }
        })
    }

    // ETAPA 7: Função de validação dos campos
	function validate() {
		// ETAPA 7.1: Verifica se nome está preenchido
		if (!user.name) {
			setStatus({
				type: 'error',
				mensagem: 'Error: Necessario preencher o campo nome 1!'
			});
			return true; // Indica que a validação falhou
		}
		// ETAPA 7.2: Verifica se email está preenchido
		if (!user.email) {
			setStatus({
				type: 'error', 
				mensagem: 'Error: Necessario preencher o campo email 1!'
			});
		}
		// ETAPA 7.3: Verifica se senha está preenchida
		if (!user.password) {
			setStatus({
				type: 'error',
				mensagem: 'Error: Necessario preencher o campo senha 1!'
			});
		}
		// ETAPA 7.4: Verifica se senha tem pelo menos 6 caracteres
		if (user.password.length < 6) {
			return setStatus({ type: 'error', mensagem: 'Error: A senha deve ter pelo menos 6 caracteres! 1'});
		}
	}

    // ETAPA 8: Renderização do componente (JSX)
    return (
        <>
            {/* ETAPA 8.1: Links de navegação */}
            <Link to="/dashboard">Dashboard</Link><br/>
            <Link to="/users">Usuarios</Link><br/>

            {/* ETAPA 8.2: Título da página */}
            <h1>Cadastrar Usuario</h1>
            <Link to="/users">Listar</Link><br/>

            {/* ETAPA 8.3: Exibição de mensagens de erro */}
            {status.type === 'error' ? <p>{status.mensagem}</p> : ''}
            
            {/* ETAPA 8.4: Redirecionamento em caso de sucesso */}
            {status.type === 'success' ? 
            <Redirect to={{
                pathname: '/users',
                state: {
                    type: 'success',
                    mensagem: status.mensagem
                }
            }}/>
            : ''}

            {/* ETAPA 8.5: Formulário de cadastro */}
            <form onSubmit={addUser}>
                {/* ETAPA 8.6: Campo nome */}
                <label>Nome: </label>
                <input type="text" name="name" placeholder="Nome completo do usuario..." onChange={valueInput}/><br/><br/>

                {/* ETAPA 8.7: Campo email */}
                <label>E-mail: </label>
                <input type="email" name="email" placeholder="Melhor e-mail do usuario..." onChange={valueInput}/><br/><br/>

                {/* ETAPA 8.8: Campo senha */}
                <label>Senha: </label>
                <input type="password" name="password" placeholder="Senha para acessar o sistema..." autoComplete="on" onChange={valueInput}/><br/><br/>

                {/* ETAPA 8.9: Botão de submit */}
                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
};