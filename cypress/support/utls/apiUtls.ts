import { ICreateEmployeePayload } from "../../support/API/payload/userApiPayload";
import { ICreateEmployeeResponse } from "../../support/API/response/userApiResponse";
import {ICreateCandidatePayload} from "../../support/API/payload/addCandidatePayload";
import {ICreateCandidateResponse} from "../../support/API/response/addCandidateResponse"


declare global{
    namespace Cypress{
        interface Chainable{
            addNewUser:(requestUrl:string,employeePayload:ICreateEmployeePayload)=>Chainable<ICreateEmployeeResponse>
            addNewCandidate:(Method:string ,requestUrl:string,candidatePayload:ICreateCandidatePayload)=>Chainable<ICreateCandidateResponse>
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

///// add new candidate
Cypress.Commands.add('addNewCandidate',(Method:string ,requestUrl:string,candidatePayload:ICreateCandidatePayload)=>{
    return cy.request({
     method:Method,
     url:requestUrl,
     body:candidatePayload,
     // headers:{
     //     'Content-Type':'application/json'
     // }
    })
    .its('body')
 })