// // Create a constructor.
function User(username, email)
{
    this.username = username;
    this.email = email;

}

// // Assign methods to the prototype, so that all instances share.
User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};

var user = new User('JeffreyWay', 'support@laracsts.com');

user.changeEmail('foo@example.com');

// console.lof(user);

// IN ES6
// This is syntatic sugar on top of the old way.
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }


    // Behind the scenes, this is added to the User prototype.
    changeEmail(newEmail) {
        this.email = newEmail;
    
    }
}

let user = new User('JeffreyWay', 'support@laracsts.com');

user.changeEmail(foo@example.com);

console.dir(user);

function log(strategy) {
    alert(strategy.foo);
}

// Classes are first class citizens.
// This means theycan be used as values...practically anywhere.
log(new class {
    handle() {
        alert('logging with some strategy.');
    }

    // get and set accessors.
    // could be used for computed properties.
    // get foo() {
    // return 'foo';
    // }
});


// Statics
class User {
    constructor(username) {
        this.username = username;
    }

}

let user = User.register('JeffreyWay');

console.log(user);