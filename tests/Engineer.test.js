const { it, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("This is test for Enginner class", ()=>{
    it('it should have a github property when instantiated with the github parameter', ()=>{
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const github = "mollycodes"
        const emp = new Engineer(name, id, email, github);
        expect(emp.github).toEqual(github);
    })
    it("it should return the github property when the gitGithub() method is invoked", ()=>{
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const github = "mollycodes"

        const emp = new Engineer(name, id, email, github);
        expect(emp.getGithub()). toEqual(github);
    })

    it("should return 'Engineer' when the getRole Method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const github = "mollycodes"

        const emp = new Engineer(name, id, email, github);
        expect(emp.getRole()). toEqual("Engineer"); 

    })
})