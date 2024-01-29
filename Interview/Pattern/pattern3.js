let count = 1;
for(let row = 1; row <= 4; row++){
    //for every row, run the col
    for (let col = 1; col <= row; col++) {
        document.write(count+" ");
        count++
    }
    //when one row is printed,we need to add a newline
    document.write("<br>");
}


// output
// 1
// 2 3
// 4 5 6
// 7 8 9 10