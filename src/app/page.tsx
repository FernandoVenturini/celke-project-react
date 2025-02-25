//import Image from "next/image";
// import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";
'use client';

import User from "@/components/User";
import { useEffect, useState } from "react";

const Home = () => {

  // Hook - useState
  const [nameUser, setNameUser] = useState('Cesar');

   // Hook - useEffect
  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [dataProduct, setDataProduct] = useState({
    name: 'curso de ...',
    price: 0,
  });

  function searchProduct() {
    console.log('Buscar produto!');
    setProductId(7);
    setProductName('Curso de React');
    setProductPrice(947);
    setDataProduct({
      name: "Curso de  Node.js",
      price: 847,
    })
  }

  useEffect(() => {
    searchProduct();
  }, [productId]);

  const userName = 'Cesar';

  return (
    <main>      
      <p >ID do produto: {productId}</p>
      <p >Nome do produto: {productName}</p>
      <p >Preco do produto: {productPrice}</p>
      <p>Nome: {dataProduct.name}</p>
      <p>Nome: {dataProduct.price}</p>
      
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
