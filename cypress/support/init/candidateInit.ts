import { ICreateCandidatePayload } from "../API/payload/addCandidatePayload"
import GenericHelper from "../helpers/genericFunctions";
/*const email :any =`Rawan${GenericHelper.genericRandomString()}@test.com`;
const firstName:any=`ayda${GenericHelper.genericRandomString()}`;
const lastName:any=`alaa${GenericHelper.genericRandomString()}`;*/
export default class CandidateInit {
    static initCandidate(): ICreateCandidatePayload {
       return {
            
                comment:null,
                consentToKeepData:false,
                contactNumber:null,
                dateOfApplication:"2023-10-14",
                email:`Rawan${GenericHelper.genericRandomString()}@test.com`,
                firstName:`ayda${GenericHelper.genericRandomString()}`,
                keywords:null,
                lastName:`alaa${GenericHelper.genericRandomString()}`,
                middleName:null,
                vacancyId:4,
            
        }
        
    }
    static shortlistCandidate():any {
        let createCandidatePayload = {
            note: null
        }
        return createCandidatePayload
    }
}