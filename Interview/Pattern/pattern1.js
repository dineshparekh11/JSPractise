
for(let row = 1; row <= 4; row++){
    //for every row, run the col
    for (let col = 1; col <= row; col++) {
        document.write(row+" ");
    }
    //when one row is printed,we need to add a newline
    document.write("<br>");
}

// Output
// 1
// 2 2
// 3 3 3
// 4 4 4 4