import React, { useState } from "react";

export const Login = () => {

    // VARIAVEIS PARA SALVAR OS VALORES DIGITADO NOS INPUTS
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // VARIAVEIS PARA RECEBER OS VALORES DIGITADO NOS INPUTS
    const valorInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    // ENVIANDO O FORMULARIO
    const loginSubmit = async (e) => {
        e.preventDefault(); // PREVINE O CARREGAMENTO DA PAGINA
        console.log(user.email);
        console.log(user.password);
    }

    return (
        <>
            <h1>Login</h1>

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
                /><br /><br />

                <button type="submit">Acessar</button>

            </form>
        </>
    );
}