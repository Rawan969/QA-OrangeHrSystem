import addUser from "../../support/helpers/signupHelper"

describe("Conduit signup",()=>{
    it('methode1 :login-create new account',()=>{
        cy.request({
            method: 'POST',
            url: 'https://conduit.productionready.io/api/users',
            body: {
                user:{
                    username: `Rawan${Math.random()}`,
                    email:`Rawan${Math.random()}@test.com`,
                    password: "123456"
                  }
                
            }
        })
    })
    it('method 2 :login-create new account',()=>{
       addUser.conduitNewUserUsingAPI(`Rawan${Math.random()}@test.com`,"123456",`Rawan${Math.random()}`)
    })
    it('method 3 :login-create new account',()=>{
        const apiPayload = {
            user:{
                username:`Rawan${Math.round((Math.random())*1000)}`,
                email:`Rawan${Math.round((Math.random())*1000)}@test.com`,
                password:'24681'
            }
        
        }
        addUser.conduitNewUserUsingAPI2(apiPayload).then((response)=>{
            expect(response.status).to.equal(201);
        })
     })
     
     it.only('method 4 :login-create new account',()=>{ ////using custom commands
        addUser.addNewUserViaAPI();
     })
     
})