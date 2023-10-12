import { ICreateEmployeePayload } from "../API/payload/userApiPayload"
import GenericHelper from "../helpers/genericFunctions"
export default class userInit {
    static initUser(): ICreateEmployeePayload {
        let createUserPayload: ICreateEmployeePayload = {
            user: {
                username: `Rawan${GenericHelper.genericRandomString()}`,
                email: `Rawan${GenericHelper.genericRandomString()}@test.com`,
                password: '24681'
            }
        }
        return createUserPayload;
    }
}