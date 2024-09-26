const exceljs= require('exceljs')

const workbook=new exceljs.Workbook();
workbook.xlsx.readFile('test.xlsx').then(()=> {
  const worksheet=  workbook.getWorksheet(1)
  worksheet.eachRow((row,rowNumber)=> {
    console.log(` Row ${rowNumber}`);
    row.eachCell((cell,colNumber)=> {
        console.log(` - Column ${colNumber}: ${cell.value}`);
    })
  })
}).catch(err => {
    console.error("Error reading file:", err);
});