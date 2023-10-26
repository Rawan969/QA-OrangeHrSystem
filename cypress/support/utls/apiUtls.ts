import { ICreateEmployeePayload } from "../API/payload/userSignUpPayload";
import { ICreateEmployeeResponse } from "../API/response/userSignUpResponse";
import {ICreateCandidatePayload} from "../../support/API/payload/addCandidatePayload";
import {ICreateCandidateResponse} from "../../support/API/response/addCandidateResponse";
import {EmployeePayload} from "../../support/API/payload/employeePayload";
import {UserPayload} from "../../support/API/payload/userPayload";
import {EmployeeResponse} from "../../support/API/response/employeeResponse";
import {UserResponse} from "../../support/API/response/userResponse";
import {addEntitlementPayload} from "../../support/API/payload/addEntitlementsPayload";
import {addEntitlementResponse} from "../../support/API/response/addEntitlementsResponse";
import {applyLeavePayload} from "../../support/API/payload/applyLeavePayload";
import {applyLeaveResponse} from "../../support/API/response/applyLeaveResponse";
import {approveLeaveRequestPayload} from "../../support/API/payload/approveLeaveRequestPayload";
import {approveLeaveRequestResponse} from "../../support/API/response/approveLeaveRequestResponse";

declare global{
    namespace Cypress{
        interface Chainable{
            addNewUser:(requestUrl:string,employeePayload:ICreateEmployeePayload)=>Chainable<ICreateEmployeeResponse>
            addNewCandidate:(Method:string ,requestUrl:string,candidatePayload:ICreateCandidatePayload)=>Chainable<ICreateCandidateResponse>
            addNewEmployee:(Method:string ,requestUrl:string,EmployeePayload:EmployeePayload)=>Chainable<EmployeeResponse>
            addUser:(Method:string ,requestUrl:string,UserPayload:UserPayload)=>Chainable<UserResponse>
            addEntitlements:(Method:string ,requestUrl:string,addEntitlementPayload:addEntitlementPayload)=>Chainable<addEntitlementResponse>
            applyLeave:(Method:string ,requestUrl:string,applyLeavePayload:applyLeavePayload)=>Chainable<applyLeaveResponse>
            approveLeave:(Method:string ,requestUrl:string,approveLeaveRequestPayload:approveLeaveRequestPayload)=>Chainable<approveLeaveRequestResponse>
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
 Cypress.Commands.add('addEntitlements',(Method:string ,requestUrl:string,addEntitlementPayload:addEntitlementPayload)=>{
    return cy.request({
     method:Method,
     url:requestUrl,
     body:addEntitlementPayload,
     // headers:{
     //     'Content-Type':'application/json'
     // }
    })
    .its('body')
 })
 Cypress.Commands.add('applyLeave',(Method:string ,requestUrl:string,applyLeavePayload:applyLeavePayload)=>{
    return cy.request({
     method:Method,
     url:requestUrl,
     body:applyLeavePayload,
     // headers:{
     //     'Content-Type':'application/json'
     // }
    })
    .its('body')
 })
 Cypress.Commands.add('approveLeave',(Method:string ,requestUrl:string,approveLeaveRequestPayload:approveLeaveRequestPayload)=>{
   return cy.request({
    method:Method,
    url:requestUrl,
    body:approveLeaveRequestPayload,
    // headers:{
    //     'Content-Type':'application/json'
    // }
   })
   .its('body')
})