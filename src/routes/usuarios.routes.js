import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const desafiosRoutes = Router();

const usersRepository = new UsersRepository();

desafiosRoutes.get("/", (req, res) => {
    const desafios = usersRepository.getALLUsers();

    return res.status(200).json({
        messege: 
        desafios.length == 0 
        ? "Nenhum desafio de bem-estar cadastrados!" 
        : `total de usuários cadastrados: ${desafios.length}`,	 
        desafios,            
    });
});

desafiosRoutes.post("/", (req, res) => {
    const { descricao , nivelDificuldade,objetivosDiarias  } = req.body;

    const desafio = usersRepository.addUser(name, email, password);

    return res.status(201).json({
        messege: "Desafio de bem-estar cadastrado!",
        desafio,
    });
});

desafiosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = usersRepository.getUserById(id);

    if (!user) {
        return res.status(404).json({
            messege: `Usuário com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        messege: `Usuário com id ${id} encontrado!`,
        user,
    });
});


desafiosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = usersRepository.updateUser(id, name, email, password);

    if (!user) {
        return res.status(404).json({
            messege: `Usuário com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        messege: `Usuário com id ${id} atualizado com sucesso!`,
        user,
    });
});


desafiosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    const user = usersRepository.deleteUser(id);

    if (!user) {
        return res.status(404).json({
            messege: `Usuário com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        messege: `Usuário com id ${id} deletado com sucesso!`,
        user,
    });

});    

export default desafiosRoutes;