const Intern = require("../lib/Intern");

describe("TEST for INTERN class", ()=>{
    it('should have a school property when instantiated with the school parameter', ()=>{
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const school = "university of Denver"
        const emp = new Intern (name, id, email, school);
        expect(emp.school).toEqual(school);
    })
    it("should return the school when the getSchool() method is invoked", ()=>{
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const school = "university of Denver"

        const emp = new Intern(name, id, email, school);
        expect(emp.getSchool()). toEqual(school);
    })

    it("should return 'Intern' when the gitRole Method is invoked", ()=> {
        const name = "molly";
        const id = 10;
        const email = "molly@email.com"
        const school = "university of Denver"

        const emp = new Intern(name, id, email, school);
        expect(emp.getRole()). toEqual("Intern"); 

    })
})

