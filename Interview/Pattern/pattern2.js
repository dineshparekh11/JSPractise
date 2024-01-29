
for(let row = 1; row <= 4; row++){
    //for every row, run the col
    for (let col = 1; col <= row; col++) {
        document.write(col+" ");
    }
    //when one row is printed,we need to add a newline
    document.write("<br>");
}

// Output
// 1
// 1 2
// 1 2 3
// 1 2 3 4