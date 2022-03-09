const Employee = require("./employee");

class  Manager extends Employee {
    constructor(name, id, email, officeNumber, role= "Manager"){
        super(name, id, email)
        this.officeNumber= officeNumber;
        this.role = role;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager