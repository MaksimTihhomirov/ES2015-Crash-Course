class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('Jeffrey', false),
    new User('Jane', true),
    new User('Jack', false)
];

console.log(
    users.find(user => user.isAdmin).name
);