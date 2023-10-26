import { addEntitlementPayload } from "../API/payload/addEntitlementsPayload";
import { applyLeavePayload } from "../API/payload/applyLeavePayload";
import { approveLeaveRequestPayload } from "../API/payload/approveLeaveRequestPayload";

export default class leave {
  static initAddEntitlements(empNumber: number): addEntitlementPayload {
    return {
      empNumber: empNumber,
      leaveTypeId: 8,
      fromDate: "2023-01-01",
      toDate: "2023-12-31",
      entitlement: "10",
    };
  }

  static initApply(): applyLeavePayload {
    return {
      leaveTypeId: 8,
      fromDate: "2023-11-10",
      toDate: "2023-11-10",
      comment: "One day only.",
      duration: {
        type: "full_day",
      },
    };
  }
  static action(): approveLeaveRequestPayload {
    return {
      action: "APPROVE",
    };
  }
}
