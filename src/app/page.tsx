//import Image from "next/image";
// import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";
'use client';

//import User from "@/components/User";
import React, { useEffect, useState } from "react";
import './home.css';
import User from "@/components/User";

const Home = () => {

  // Declarar uma nova varivel dados com state e atribuir o objeto:
  const [data, setData] = useState({
    nameUser: '',
    emailUser: ''
  });

  // Receber os dados dos campos do formualrio:
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>) => setData({
    ...data, [e.target.name]: e.target.value
  });

  //Executar a funcao quando o usuario clicar no botao do formulario:
  const addUSer = (e: React.FormEvent<HTMLFormElement>) => {
    // Bloquear o recarregamento da pagina:
    e.preventDefault();

    console.log('Processar o form');

    // Manipular os dados recebidos, por exemplo, enviar os dados para a API:
    // Concatenar e imprimir utilizando +:
    // console.log('Nome: ' + data.nameUser);
    // console.log('Email: ' + data.emailUser);

    // Concatenar e imprimir utilizando Template Strings:
    console.log(`Nome: ${data.nameUser}`);
    console.log(`E-mail: ${data.emailUser}`);
  }

  
  // Hook - useState
  const [nameUser, setNameUser] = useState('Cesar');

   // Hook - useEffect
  // const [productId, setProductId] = useState();
  // const [productName, setProductName] = useState();
  // const [productPrice, setProductPrice] = useState();
  // const [dataProduct, setDataProduct] = useState({
  //   name: 'curso de ...',
  //   price: 0,
  // });

  // function searchProduct() {
  //   console.log('Buscar produto!');
  //   setProductId(7);
  //   setProductName('Curso de React');
  //   setProductPrice(947);
  //   setDataProduct({
  //     name: "Curso de  Node.js",
  //     price: 847,
  //   })
  // }

  // useEffect(() => {
  //   searchProduct();
  // }, [productId]);

  const userName = 'Cesar';
  

  return (
    <main className="main-container">
      <form onSubmit={addUSer} className="form-container">
        <h1>Cadastrar Usuario</h1>

        <div className="form-group">
          <label htmlFor="nameUser">Nome</label>
          <input type="text" name="nameUser" id="nameUser" placeholder="Nome do cliente" onChange={valueInput} />
        </div>

        <div className="form-group">
          <label htmlFor="emailUser">Email</label>
          <input type="email" name="emailUser" id="emailUser" placeholder="Email do cliente" onChange={valueInput} />
        </div>

        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>


      {/*
      <p >ID do produto: {productId}</p>
      <p >Nome do produto: {productName}</p>
      <p >Preco do produto: {productPrice}</p>
      <p>Nome: {dataProduct.name}</p>
      <p>Nome: {dataProduct.price}</p>
      */}

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
