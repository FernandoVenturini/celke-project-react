import React from "react";

export const Dashboard = () => {

    // CRIA CONST PRA RECEBER TOKEN
    const token = localStorage.getItem('token');

    return (
        <>
            <h1>Dashboard</h1>
            <p>Token : {token}</p>
        </>
    );
}