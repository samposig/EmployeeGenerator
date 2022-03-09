const Employee = require("../lib/employee")

describe("Test for Employee Class", ()=> {
    test("Should instantiate and create a employee object", () => {
        const emp = new Employee();
        expect(typeof emp).toBe("object")
    });

    it("Should have a name property when instantiated with a name parameter", () => {
        const name = "molly";
        const emp = new Employee(name);
        expect(emp.name).toEqual(name);
    });

    it("should have a id property when instantiated with a id parameter", () => {
        const name = "molly";
        const id = 10;
        const emp = new Employee(name, id);
        expect(emp.id).toEqual(id);
    });

    it("should have a email property when instantiated with a email parrameter", () => {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const emp = new Employee(name, id, email);
        expect(emp.email).toEqual(email);
    });

    it("Should return the name of the object when GetName method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const emp = new Employee(name, id, email);
        expect(emp.getName()).toEqual(name);
    });
//tests methods
    it("Should return the id of the object when GetID method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const emp = new Employee(name, id, email);
        expect(emp.getId()).toEqual(id);
    })

    it("Should return the email of the object when GetEmail method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const emp = new Employee(name, id, email);
        expect(emp.getEmail()).toEqual(email);
    })

    it("should return 'employee' when the getRole method is called", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const emp = new Employee(name, id, email);
        expect(emp.getRole()).toEqual("Employee");
    })
})