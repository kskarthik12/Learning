let a=[1,5,5,6,3,6,7,2,7,9]

// let b= a.filter((item,index)=>{

//     return a.indexOf(item)===index;

// })

 b.sort((a,b)=> b-a)
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length-1-i ; j++) {
        if (a[j] > a[j + 1]) {
            let temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;

          
        }
        // console.log(b[j]);
    }
}


console.log(a)

