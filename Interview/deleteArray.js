const studentIds = [10, 11, 342, 35, 54, 44];
const deleteAt = 3;

const newStudentIds = [...studentIds.slice(0, deleteAt), ...studentIds.slice(deleteAt+1)];
console.log(newStudentIds);