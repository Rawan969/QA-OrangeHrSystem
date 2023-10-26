import { EmployeePayload } from "../API/payload/employeePayload";
import {UserPayload} from "../API/payload/userPayload";
import GenericHelper from "../helpers/genericFunctions";

export const firstName:string='Ahmad';
export const lastName:string='Nassar';
export const username:string=`Rawan${GenericHelper.genericRandomString()}`;
export const password:string='123456789r';
const empId:any = `${GenericHelper.genericRandomString()}`;


export default class CandidateInit {
    static initEmployee(): EmployeePayload {
       return {
            
        empPicture: null,
  
        employeeId: empId,
      
        firstName:firstName,
      
        lastName: lastName,
      
        middleName: "",
            
        }
        
    }
    static initUser(empNum:number): UserPayload {
        return {
             
         empNumber: empNum,
   
         password: password,
       
         status:true,
       
         userRoleId:2,
       
         username:username,
             
         }
         
     }
}