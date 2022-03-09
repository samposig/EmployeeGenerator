class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
    generateHTMLCard(extra){
        return `
        <div class="card" style="width: 300px;">
            <div class="upper">
                <div>${this.name}</div> 
                 <div>${this.role}</div>
            </div>
            <div class="lower">
                <ul>
                    <li>Id: ${this.Id}</li>
                    <li>Email: ${this.email}</li>
                    ${this.role === "Manager" ?
                    `<li>Office Number: ${extra}</li>` :
                    this.role === "Engineer" ?
                    `<li>Github Profile: ${extra}</li>` :
                    `<li>School: ${extra}</li>`
                }
                </ul>
            </div>
        </div>
        `
    }
}

module.exports = Employee;