function copyASpecificRange() {
  let currentsheet = SpreadsheetApp.getActiveSpreadsheet();
  let datasource = currentsheet.getSheetByName("Fruits and Veg");
  let datarange = datasource.getRange("A1:B6");
  let datatocopy = datarange.getValues();

  let numberofrows = datatocopy.length;
  let numberofcolumns = datatocopy[0].length;

  let destinationsheet = currentsheet.getSheetByName("Copy");
  let rangeofdata = destinationsheet.getRange(1, 1, numberofrows, numberofcolumns);
  
  rangeofdata.setValues(datatocopy);
}
