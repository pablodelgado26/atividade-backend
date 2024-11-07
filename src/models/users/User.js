class User {
    constructor( descricao , nivelDificuldade,objetivosDiarias {
        this.id = this.generateId(); 
        this.descricao = descricao;
        this.nivelDificuldade = nivelDificuldade;
        this.objetivosDiarias = objetivosDiarias;
    }

    generateId(){
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default User;