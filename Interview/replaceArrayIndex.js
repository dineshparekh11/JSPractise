const studentIds = [11,33,42,54,23,41,35];

const repalceAt = 1;
const ele = 15;

const newStudentIds = {...studentIds.slice(0, repalceAt), ele, ...repalceAt.slice(repalceAt)}

console.log(newStudentIds);