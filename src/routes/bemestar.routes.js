import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getALLUsers();

    return res.status(200).json({
        messege: 
        usuarios.length == 0 
        ? "Nenhum usuário cadastrado" 
        : `total de usuários cadastrados: ${usuarios.length}`,	 
        usuarios,            
    });
});

usuariosRoutes.post("/", (req, res) => {
    const { name, email, password } = req.body;

    const usuario = usersRepository.addUser(name, email, password);

    return res.status(201).json({
        messege: "Usuário cadastrado com sucesso!",
        usuario,
    });
});

usuariosRoutes.get("/:id", (req, res) => {
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


usuariosRoutes.put("/:id", (req, res) => {
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


usuariosRoutes.delete("/:id", (req, res) => {
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

export default usuariosRoutes;