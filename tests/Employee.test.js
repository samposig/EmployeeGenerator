const { isTaggedTemplateExpression } = require("@babel/types")
const { expect, it } = require("@jest/globals")
const Employee = requir("./employee.js")

describe("Test for Emplyee Class", ()=> {
    test("shouldreturn true, this ais a dummy test", () => {
        const exp = new Employee();
        expect(type of exp).toBe("object")
    });

    it("should have a name property when instantiated with a name parameter", () => {
        const name = "molly";
        const exp = new Employee(name);
        expect(exp.name).toEqual(name);
    });

    it("should have a name property when instantiated with a id parameter", () => {
        const name = "molly";
        const id = 10;
        const exp = new Employee(name, id);
        expect(exp.id).toEqual(id);
    });

    it("should have a name property when instantiated with a email parrameter", () => {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const exp = new Employee(name, id, email);
        expect(exp.email).toEqual(email);
    });

    it("Should return the name of the object when GetName method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const exp = new Employee(name, id, email);
        expect(exp.getName()).toEqual(name);
    })

    it("Should return the id of the object when GetID method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const exp = new Employee(name, id, email);
        expect(exp.getId()).toEqual(id);
    })

    it("Should return the email of the object when GetEmail method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const exp = new Employee(name, id, email);
        expect(exp.getEmail()).toEqual(email);
    })

    it("should return 'employee' when the getRole method is called", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const exp = new Employee(name, id, email);
        expect(exp.getEmail()).toEqual(email);
    })
})