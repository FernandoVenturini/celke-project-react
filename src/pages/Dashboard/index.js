import React, {useContext} from "react";
import {Context} from '../../Context/AuthContext';

export const Dashboard = () => {

    // CRIA CONST PRA RECEBER TOKEN
    const token = localStorage.getItem('token');

    const {authenticated, handleLogout} = useContext(Context);

    return (
        <>
            <h1>Dashboard</h1>
            <p>Token : {token}</p>
            <button type="button" onClick={handleLogout}>Sair</button>
        </>
    );
}