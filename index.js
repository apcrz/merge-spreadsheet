const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const folder = './spreadsheets'

const files = fs.readdirSync(folder);

let allLines = [];
let columnBase = null;

files.forEach((file, index) => {
   const filePath = path.join(folder, file);
   const workbook = XLSX.readFile(filePath);
   const sheetName = workbook.SheetNames[0];
   const worksheet = workbook.Sheets[sheetName];
   const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
   if (index === 0) {
       columnBase = json[0];
   }
   json.slice(1).forEach((row) => {
       const linha = {};
       columnBase.forEach((col, i) => {
           linha[col] = row[i];
       });
       allLines.push(linha);
   });
});

if (allLines.length === 0) {
   console.log('No data found in the files.');
   process.exit(1);
}

const newSpreadsheet = XLSX.utils.json_to_sheet(allLines);
const newWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newWorkbook, newSpreadsheet, "Merged Data");

const exitName = 'final_spreadsheet.xlsx';
XLSX.writeFile(newWorkbook, exitName);

console.log(`✅ Single spreadsheet created successfully: ${exitName}`);
