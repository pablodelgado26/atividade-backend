import Desafio from './Desafios.js';

class DesafiosRepository {
    constructor() {
        this.Desafios = [];
    }

    getALLDesafios() {
        return this.Desafios;
    }

    addDesafio(descricao, nivelDificuldade, objetivosDiarias) {
        const newDesafio = new Desafio(descricao, nivelDificuldade, objetivosDiarias);
        this.Desafios.push(newDesafio);
        return newDesafio;
    }

    validateDesafio(descricao, nivelDificuldade, objetivosDiarias) {
        if (!descricao || !nivelDificuldade) {
            return false;
        }
    
        if (nivelDificuldade !== 'baixo' && nivelDificuldade !== 'medio' && nivelDificuldade !== 'alto') {
            return false;
        }
    
        if (!Array.isArray(objetivosDiarias) || objetivosDiarias.length < 2) {
            return false;
        }
    
        return true;
    }

    getDesafioById(id) {
        const desafio = this.Desafios.find((U) => U.id == id);
        return desafio;
    }

    updateDesafio(id, descricao, nivelDificuldade, objetivosDiarias) {
        const desafio = this.getDesafioById(id);
        if (!desafio) {
            return null;
        }

        desafio.descricao = descricao;
        desafio.nivelDificuldade = nivelDificuldade;
        desafio.objetivosDiarias = objetivosDiarias;

        return desafio;
    }

    deleteDesafio(id) {
        const desafio = this.getDesafioById(id);

        if (!desafio) {
            return null;
        }

        this.Desafios = this.Desafios.filter((U) => U.id != id);
        
        return desafio;
    }
}

export default DesafiosRepository;