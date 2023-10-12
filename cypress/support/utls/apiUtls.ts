import { ICreateEmployeePayload } from "../../support/API/payload/userApiPayload";
import { ICreateEmployeeResponse } from "../../support/API/response/userApiResponse";


declare global{
    namespace Cypress{
        interface Chainable{
            addNewUser:(requestUrl:string,employeePayload:ICreateEmployeePayload)=>Chainable<ICreateEmployeeResponse>
        }
    }
}
Cypress.Commands.add('addNewUser',(requestUrl:string,userPayload:ICreateEmployeePayload)=>{
   return cy.api({
    method:'POST',
    url:requestUrl,
    body:userPayload,
    // headers:{
    //     'Content-Type':'application/json'
    // }
   })
   .its('body')
})