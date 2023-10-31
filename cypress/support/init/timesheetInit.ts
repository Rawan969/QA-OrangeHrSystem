export default  class timesheetInit {
    static editTimeSheetInit(timeId: number): any {
      let createTimeSheetPayload: any = {
        timesheetId: timeId,
      };
      return createTimeSheetPayload;
    }

    static addTimeSheetInit(): any {
      let createTimeSheetPayload: any = {
        entries: 
        [
          {
            projectId: 2,
            activityId: 11,
            dates: { "2023-10-30": { duration: "05:00" } },
          },
        ],
        deletedEntries: [],
      };
      return createTimeSheetPayload;
    }

    static submitTimeSheetInit(): any {
        let createTimeSheetPayload: any = {
            action: "SUBMIT"
        }
        return createTimeSheetPayload;
    }
  }