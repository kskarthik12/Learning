// let a=[1,5,5,6,3,6,7,2,7,9]

// for(i=0;i<=a.length;i++){
//     for(j=0;j<a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//            temp= a[j];
//            a[j]=a[j+1]
//            a[j+1]=temp
//         }
//     }
// }

// console.log(a)

// for(i=0;i<=a.length;i++){
//    for(j=i+1;j<=a.length;j++){
//     if(a[i]===a[j]){
//         a.splice(j,1)
        
        
//     }
//   }
// }

// console.log(a)

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let b=[];
let c;

for(let i=0;i<a.length;i++){
    b[i]=[]
    for(j=0;j<a[i].length;j++){
        
       b[i][j]=a[a[i].length-1-j][i];
       
       
    }
    
}




// let b=[];
// let c=0;
// for(let i=0;i<a.length;i++){
//         b[i]=[]
//         for(j=0;j<a.length;j++){
//             b[i][j]=a[i][j]
//           if( b[i][j]===a[j][i]){
//             console.log(c=b[i][j]+c)
//           }
           
//         }
        
//     }

// console.log(c)


