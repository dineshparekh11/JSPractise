function pattern1(n){
    for(var row = 1; row < n; row++){
         //for every row, run the col
         for (var col = 1; col <= row; col++){
            console.log("*");
         }
    }
}