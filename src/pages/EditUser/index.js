import { type } from 'os';
import React, { useState, useEffect } from 'react';
import api from '../../config/configApi';
import { Link, Redirect } from 'react-router-dom';


export const EditUser = (props) => { // componente para editar usuario
	const [data, setData] = useState(''); // estado para armazenar os dados do usuario	

	const [name, setName] = useState(''); // estado para armazenar o nome do usuario
	const [email, setEmail] = useState(''); // estado para armazenar o email do usuario
	const [password, setPassword] = useState(''); // estado para armazenar a senha do usuario

	const [id] = useState(props.match.params.id); // estado para armazenar o id do usuario, pegando o id dos parametros da URL

	const [status, setStatus] = useState({ // estado para armazenar o status da requisicao
		type: '', // tipo do status (success, error, warning)
		mensagem: '' // mensagem do status
	});

	const editUser = async e => { // funcao para editar usuario
		e.preventDefault(); // impede o comportamento padrao do form de recarregar a pagina

		// Definindo os headers da requisicao:
		const headers = {
			'headers': { // definindo os headers da requisicao
				'Content-Type': 'application/json', // definindo o tipo de conteudo como JSON
				'Authorization': 'Bearer ' + localStorage.getItem('token') // buscando token no localStorage
			}
		};

		// Fazendo requisicao API para editar usuario::
		await api.put('/user/' + id, { name, email, password }, headers) // passando o id do usuario na URL, os dados no corpo da requisicao e os headers
			.then((response) => { // se a requisicao for bem sucedida
				setStatus({ // atualizando o estado do status
					type: 'success', // definindo o tipo como success
					mensagem: response.data.mensagem // definindo a mensagem de sucesso
				});
			}).catch((err) => { // se der erro na requisicao
				if (err.response) { // se houver uma resposta do servidor
					setStatus({ // atualizando o estado do status
						type: 'error', // definindo o tipo como error
						mensagem: err.response.data.mensagem // definindo a mensagem de erro
					});
				} else { // se nao houver resposta do servidor
					setStatus({ // atualizando o estado do status
						type: 'error', // definindo o tipo como error
						mensagem: "Erro: Tente mais tarde!" // definindo a mensagem de erro generica
					});
				}
			});
	};

	// Fazendo requisicao API para pesquisar usuario:
	useEffect(() => { // useEffect para carregar os dados do usuario quando o componente for montado
		const getUser = async () => { // funcao para buscar os dados do usuario
			const headers = { // definindo os headers da requisicao
				'Content-Type': 'application/json', // definindo o tipo de conteudo como JSON
				'Authorization': 'Bearer ' + localStorage.getItem('token') // buscando token no localStorage
			};
			// Fazendo requisicao API para buscar usuario:
			await api.get('/user/' + id, headers) // passando o id do usuario na URL e os headers
				.then((response) => { // se a requisicao for bem sucedida
					if (response.data.user) { // se o usuario for encontrado
						setName(response.data.user.name); // atualizando o estado do nome com o nome do usuario
						setEmail(response.data.user.email); // atualizando o estado do email com o email do usuario
					} else { // se o usuario nao for encontrado
						setStatus({ // atualizando o estado do status
							type: 'warning', // definindo o tipo como warning 
							mensagem: "Erro! Usuario nao encontrado!" // definindo a mensagem de erro
						});
					}
				}).catch((err) => { // 	se der erro na requisicao
					if (err.response) { // se houver uma resposta do servidor
						setStatus({ // atualizando o estado do status
							type: 'warning', // definindo o tipo como warning
							mensagem: err.response.data.mensagem // definindo a mensagem de erro
						});
					} else { // se nao houver resposta do servidor
						setStatus({ // atualizando o estado do status
							type: 'warning', // definindo o tipo como warning
							mensagem: "Erro! Tente mais tarde!" // definindo a mensagem de erro generica
						});
					}
				});
		};
		getUser(); // chamando a funcao para buscar os dados do usuario
	}, [id]);

	return (
		<div>
			<Link to="/dashboard">Dashboard</Link><br />
			<Link to="/users">Usuarios</Link><br />

			<Link to="/users">Listar</Link><br />

			<h1>Editar Usuario</h1>

			{status.type === 'warning' ?
				<Redirect to={{
					pathname: '/users',
					state: {
						type: "error",
						mensagem: status.mensagem
					}
				}} /> : ""}
			{status.type === 'success' ?
				<Redirect to={{
					pathname: '/users',
					state: {
						type: "success",
						mensagem: status.mensagem
					}
				}} /> : ""}
			{status.type === 'error' ? <p style={{color:'#ff0000'}}>{status.mensagem}</p> : ""}

			<hr />

			<form onSubmit={editUser}>
				<label>Nome: </label>
				<input type="text" name="name" placeholder="Nome completo" value={name} onChange={text => setName(text.target.value)} /><br />

				<label>Email: </label>
				<input type="email" name="email" placeholder="Melhor email" value={email} onChange={text => setEmail(text.target.value)} /><br />

				<label>Senha:</label>
				<input type="password" name="password" placeholder="Password" autoComplete='on' onChange={text => setPassword(text.target.value)} /><br />

				<button type='submit'>Salvar</button>
			</form>
		</div>
	);
};

export default EditUser;