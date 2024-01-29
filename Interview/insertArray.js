const invoiceNumbers = [12,34,11,24,5,37,67];

//index always starts with 0

const ele = 3;
const insertAt = 2;

const newInvoiceNumbers = [...invoiceNumbers.slice(0,  insertAt), ele, ...invoiceNumbers.slice(insertAt)];

console.log(newInvoiceNumbers);