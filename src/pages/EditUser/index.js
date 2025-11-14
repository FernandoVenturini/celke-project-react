// ========== ETAPA 1: IMPORTAÇÕES ==========
import React, { useState, useEffect } from 'react'; // 1.1 - Importa React e hooks para gerenciar estado e efeitos
import api from '../../config/configApi'; // 1.2 - Importa configuração da API para fazer requisições HTTP
import { Link, Redirect } from 'react-router-dom'; // 1.3 - Importa componentes para navegação entre páginas

// ========== ETAPA 2: DECLARAÇÃO DO COMPONENTE E ESTADOS ==========
export const EditUser = (props) => { // 2.1 - Define componente funcional que recebe props como parâmetro
    // 2.2 - Estado para armazenar o nome do usuário no formulário
    const [name, setName] = useState('');
    
    // 2.3 - Estado para armazenar o email do usuário no formulário  
    const [email, setEmail] = useState('');
    
    // 2.4 - Estado para armazenar a senha do usuário no formulário
    const [password, setPassword] = useState('');
    
    // 2.5 - Estado para armazenar o ID do usuário vindo da URL
    const [id] = useState(props.match.params.id);
    
    // 2.6 - Estado para controlar mensagens de status (sucesso, erro, aviso)
    const [status, setStatus] = useState({
        type: '', // 2.7 - Tipo da mensagem: 'success', 'error', 'warning'
        mensagem: '' // 2.8 - Texto da mensagem a ser exibida
    });

    // ========== ETAPA 3: FUNÇÃO PARA EDITAR USUÁRIO ==========
    const editUser = async e => { // 3.1 - Função assíncrona chamada ao enviar formulário
        e.preventDefault(); // 3.2 - Impede recarregamento da página ao enviar formulário
        
        // 3.3 - Configura cabeçalhos da requisição HTTP
        const headers = {
            'headers': {
                'Content-Type': 'application/json', // 3.4 - Define que dados serão enviados como JSON
                'Authorization': 'Bearer ' + localStorage.getItem('token') // 3.5 - Adiciona token de autenticação
            }
        };
        
        // 3.6 - Faz requisição PUT para API para atualizar usuário
        await api.put('/user/' + id, { name, email, password }, headers)
            .then((response) => { // 3.7 - Executado se requisição for bem-sucedida
                setStatus({ // 3.8 - Atualiza estado com mensagem de sucesso
                    type: 'success',
                    mensagem: response.data.mensagem
                });
            }).catch((err) => { // 3.9 - Executado se ocorrer erro na requisição
                if (err.response) { // 3.10 - Se servidor respondeu com erro
                    setStatus({ // 3.11 - Atualiza estado com mensagem de erro do servidor
                        type: 'error',
                        mensagem: err.response.data.mensagem
                    });
                } else { // 3.12 - Se erro de conexão (servidor não respondeu)
                    setStatus({ // 3.13 - Atualiza estado com mensagem de erro genérica
                        type: 'error',
                        mensagem: "Erro: Tente mais tarde!"
                    });
                }
            });
    };

    // ========== ETAPA 4: BUSCAR DADOS DO USUÁRIO AO CARREGAR COMPONENTE ==========
    useEffect(() => { // 4.1 - Hook que executa quando componente é montado ou ID muda
        const getUser = async () => { // 4.2 - Função assíncrona para buscar dados do usuário
            // 4.3 - Configura cabeçalhos para autenticação
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };
            
            // 4.4 - Faz requisição GET para buscar dados do usuário específico
            await api.get('/user/' + id, headers)
                .then((response) => { // 4.5 - Executado se busca for bem-sucedida
                    if (response.data.user) { // 4.6 - Verifica se usuário foi encontrado
                        // 4.7 - Preenche campos do formulário com dados do usuário
                        setName(response.data.user.name);
                        setEmail(response.data.user.email);
                    } else { // 4.8 - Se usuário não foi encontrado na API
                        setStatus({ // 4.9 - Atualiza estado com mensagem de aviso
                            type: 'warning',
                            mensagem: "Erro! Usuario nao encontrado!"
                        });
                    }
                }).catch((err) => { // 4.10 - Executado se ocorrer erro na busca
                    if (err.response) { // 4.11 - Se servidor respondeu com erro
                        setStatus({ // 4.12 - Atualiza estado com mensagem de aviso do servidor
                            type: 'warning',
                            mensagem: err.response.data.mensagem
                        });
                    } else { // 4.13 - Se erro de conexão
                        setStatus({ // 4.14 - Atualiza estado com mensagem de aviso genérica
                            type: 'warning',
                            mensagem: "Erro! Tente mais tarde!"
                        });
                    }
                });
        };
        getUser(); // 4.15 - Chama função para buscar dados do usuário
    }, [id]); // 4.16 - Array de dependências: executa quando ID muda

    // ========== ETAPA 5: RENDERIZAÇÃO DA INTERFACE ==========
    return (
        <div>
            {/* 5.1 - Links de navegação para outras páginas */}
            <Link to="/dashboard">Dashboard</Link><br />
            <Link to="/users">Usuarios</Link><br />
            <Link to="/users">Listar</Link><br />
            
            {/* 5.2 - Título da página */}
            <h1>Editar Usuario</h1>
            
            {/* 5.3 - Redireciona para lista de usuários se usuário não for encontrado */}
            {status.type === 'warning' ?
                <Redirect to={{
                    pathname: '/users',
                    state: {
                        type: "error",
                        mensagem: status.mensagem
                    }
                }} /> : ""}
            
            {/* 5.4 - Redireciona para lista de usuários se edição for bem-sucedida */}
            {status.type === 'success' ?
                <Redirect to={{
                    pathname: '/users',
                    state: {
                        type: "success",
                        mensagem: status.mensagem
                    }
                }} /> : ""}
            
            {/* 5.5 - Exibe mensagem de erro em vermelho se houver */}
            {status.type === 'error' ? <p style={{color:'#ff0000'}}>{status.mensagem}</p> : ""}
            
            <hr />
            
            {/* 5.6 - Formulário para editar dados do usuário */}
            <form onSubmit={editUser}>
                {/* 5.7 - Campo para editar nome do usuário */}
                <label>Nome: </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nome completo" 
                    value={name} 
                    onChange={text => setName(text.target.value)}
                /><br />
                
                {/* 5.8 - Campo para editar email do usuário */}
                <label>Email: </label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Melhor email" 
                    value={email} 
                    onChange={text => setEmail(text.target.value)} 
                /><br />
                
                {/* 5.9 - Campo para editar senha do usuário */}
                <label>Senha:</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    autoComplete='on' 
                    onChange={text => setPassword(text.target.value)} 
                /><br />
                
                {/* 5.10 - Botão para submeter formulário */}
                <button type='submit'>Salvar</button>
            </form>
        </div>
    );
};

// ========== ETAPA 6: EXPORTAÇÃO DO COMPONENTE ==========
export default EditUser; // 6.1 - Exporta componente como padrão para ser usado em outros arquivos