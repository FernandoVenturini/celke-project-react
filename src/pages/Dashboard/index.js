import React, {useContext} from "react";
import {Context} from '../../Context/AuthContext';

import {Link} from 'react-router-dom';

export const Dashboard = () => {


    const {authenticated, handleLogout} = useContext(Context);

    return (
        <>
            <Link to="/dashboard">Dashboard</Link><br/>
            <Link to="/users">Usuarios</Link><br/>

            <h1>Dashboard</h1>
            <button type="button" onClick={handleLogout}>Sair</button>
        </>
    );
}