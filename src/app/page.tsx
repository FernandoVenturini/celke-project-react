//import Image from "next/image";
// import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";
'use client';

import User from "@/components/User";
import { useState } from "react";

const Home = () => {

  const [nameUser, setNameUser] = useState('Cesar');

  const userName = 'Cesar';

  return (
    <main>      
      <p>Nome: {nameUser}</p>
      <button onClick={() => setNameUser('Fernando!')}>Alterar nome</button>

      <User name={userName}>
        <p>Este e um comentario extra fornecido como children.</p>
      </User>
      <h2>Bem vindo, Celke!</h2>
    </main>
  );
}
export default Home;
