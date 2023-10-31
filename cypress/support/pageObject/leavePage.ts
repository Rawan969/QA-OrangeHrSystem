type keyVal = {
    key: string;
    value: string;
  };
class LeavePage {
    elements = {
        mainTable: () => cy.get('.oxd-table'),
        tableHeader: () => cy.get('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th'),
    };
  
    open() {
      cy.visit("/web/index.php/leave/viewMyLeaveList");
    }

    assertionFun(arr: keyVal[]){
        let columnCount: any;
        this.elements.mainTable().find('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th').its('length').then((count) => {
            columnCount = count;
        });
        for (let i = 0; i < arr.length; i++) {
            const columnName = arr[i].key;
            this.elements.tableHeader().each((th, index) => {
                cy.wrap(th).invoke('text').then((text: any) => {
                    if (text === columnName) {
                        cy.get(`.oxd-table-cell.oxd-padding-cell > div:eq(${index})`).should('contain', arr[i].value);
                    }
                });
            });
        }
    }
  }
  
  export default LeavePage;