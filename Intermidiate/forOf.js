const social = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"]

// for (const n of social){
//     console.log(n)

// }

const symbol =  {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline"
}

for (const n in symbol) {
    console.log(`Keys is: ${n} and Values is: ${symbol[n]}`)
}