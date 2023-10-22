import { ICreateEmployeePayload } from "../API/payload/userSignUpPayload";
import { ICreateEmployeeResponse } from "../API/response/userSignUpResponse";
import {ICreateCandidatePayload} from "../../support/API/payload/addCandidatePayload";
import {ICreateCandidateResponse} from "../../support/API/response/addCandidateResponse";
import {EmployeePayload} from "../../support/API/payload/employeePayload";
import {UserPayload} from "../../support/API/payload/userPayload";
import {EmployeeResponse} from "../../support/API/response/employeeResponse";
import {UserResponse} from "../../support/API/response/userResponse";



declare global{
    namespace Cypress{
        interface Chainable{
            addNewUser:(requestUrl:string,employeePayload:ICreateEmployeePayload)=>Chainable<ICreateEmployeeResponse>
            addNewCandidate:(Method:string ,requestUrl:string,candidatePayload:ICreateCandidatePayload)=>Chainable<ICreateCandidateResponse>
            addNewEmployee:(Method:string ,requestUrl:string,EmployeePayload:EmployeePayload)=>Chainable<EmployeeResponse>
            addUser:(Method:string ,requestUrl:string,UserPayload:UserPayload)=>Chainable<UserResponse>
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
 Cypress.Commands.add('addNewEmployee',(Method:string ,requestUrl:string,EmployeePayload:EmployeePayload)=>{
    return cy.request({
     method:Method,
     url:requestUrl,
     body:EmployeePayload,
     // headers:{
     //     'Content-Type':'application/json'
     // }
    })
    .its('body')
 })
 Cypress.Commands.add('addUser',(Method:string ,requestUrl:string,UserPayload:UserPayload)=>{
    return cy.request({
     method:Method,
     url:requestUrl,
     body:UserPayload,
     // headers:{
     //     'Content-Type':'application/json'
     // }
    })
    .its('body')
 })