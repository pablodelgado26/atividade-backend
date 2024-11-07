import User from './User.js';

class UsersRepository {
    constructor() {
        this.users = [];
    }

    getALLUsers() {
        return this.users;
    }

    addUser(name, email, passoword) {
        const newUser = new User(name, email, passoword);
        this.users.push(newUser);
        return newUser;
    }

    getUserById(id) {
        const user = this.users.find((U) => U.id == id);
        return user;
    }

    updateUser(id, name, email, password) {
        const user = this.getUserById(id);
        if (!user) {
            return null;
        }

        user.name = name;
        user.email = email;
        user.password = password;

        return user;
    }

    deleteUser(id) {
        const user = this.getUserById(id);

        if(!user) {
            return null;
        }

        this.users = this.users.filter((U) => U.id != id);
        
        return user;
    }
}

export default UsersRepository;