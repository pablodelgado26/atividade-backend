import { Router } from "express";
import DesafiosRepository from "../models/desafios/DesafiosRepository.js";

const desafiosRoutes = Router();

const desafiosRepository = new DesafiosRepository();

desafiosRoutes.get("/", (req, res) => {
    const desafios = desafiosRepository.getALLDesafios();

    return res.status(200).json({
        message: 
        desafios.length == 0 
        ? "Nenhum desafio de bem-estar cadastrado!" 
        : `Total de desafios cadastrados: ${desafios.length}`,	 
        desafios,            
    });
});

desafiosRoutes.post("/", (req, res) => {
    const { descricao, nivelDificuldade, objetivosDiarias } = req.body;

    if (!desafiosRepository.validateDesafio(descricao, nivelDificuldade, objetivosDiarias)) {
        return res.status(400).json({
            message: "Dados inválidos para cadastro do desafio!",
        });
    }

    const desafio = desafiosRepository.addDesafio(descricao, nivelDificuldade, objetivosDiarias);

    return res.status(201).json({
        message: "Desafio de bem-estar cadastrado!",
        desafio,
    });
});

desafiosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const desafio = desafiosRepository.getDesafioById(id);

    if (!desafio) {
        return res.status(404).json({
            message: `Desafio com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        message: `Desafio com id ${id} encontrado!`,
        desafio,
    });
});

desafiosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { descricao, nivelDificuldade, objetivosDiarias } = req.body;

    const desafio = desafiosRepository.updateDesafio(id, descricao, nivelDificuldade, objetivosDiarias);

    if (!desafio) {
        return res.status(404).json({
            message: `Desafio com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        message: `Desafio com id ${id} atualizado com sucesso!`,
        desafio,
    });
});

desafiosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const desafio = desafiosRepository.deleteDesafio(id);

    if (!desafio) {
        return res.status(404).json({
            message: `Desafio com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        message: `Desafio com id ${id} deletado com sucesso!`,
        desafio,
    });
});

export default desafiosRoutes;