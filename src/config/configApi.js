// IMPORTANDO AXIOS
import axios from 'axios';

// CRIANDO INSTANCIA DE CONFIGURACAO COM BACKEND
export default axios.create({
    baseURL: 'http://localhost:8080',
});