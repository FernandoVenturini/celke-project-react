// IMPORTANDO AXIOS:
import axios from 'axios';

// CRIANDO INSTANCIA:
export default axios.create({
    baseURL: 'http://localhost:8080'
})