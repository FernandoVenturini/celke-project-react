//import Image from "next/image";
// import Menu from "@/components/Menu";
// import Footer from "@/components/Footer";

import User from "@/components/User";

const Home = () => {

  const userName = 'Cesar';

  return (
    <main>      
      <User name={userName}>
        <p>Este e um comentario extra fornecido como children.</p>
      </User>
      <h2>Bem vindo, Celke!</h2>
    </main>
  );
}
export default Home;
