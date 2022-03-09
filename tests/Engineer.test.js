const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Engineer = require("../lib/Intern");
const Enginner = require("./Enginner");
describe("This is test for Enginner class", ()=>{
    it('it should have a github property when instantiated with the github parameter', ()=>{
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const github = "mollycodes"
         const exp = new Engineer(name, id, email, github);
         expect(exp.github).toEqual(github);
    })
    it("it should return the github property when the gitGithub() method is invoked", ()=>{
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const github = "mollycodes"

        const exp = new Engineer(name, id, email, github);
        expect(exp.getGithub()). toEqual(github);
    })

    it("should return 'Engineer' when the gitRole Method is invoked", ()=> {

    })
})