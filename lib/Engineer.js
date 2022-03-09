const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role= "Engineer"){
        super(name, id, email, 'Engineer')
        this.github = github;
        this.role = role;
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer