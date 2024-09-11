//part 1

let x =100;

for(let i =1;i<=100;i++){

  if(i%3 ===0 && i%5===0){
    console.log('Fizz Buzz '+ i)
  }else{

    if(i%3 ===0 ){
      console.log('Fizz '+i)
    }else if( i%5===0){
        console.log('Buzz '+i)
    }else if(i%3 !==0 && i%5!==0){
      console.log(i)
    }

  }

}

//part 2;

let n =19;


  for(let i =1;i<=n;i++){
    let formula_2=(6*i)+1;
    let formula_1=(6*i)-1;
    
    if(i<n){
      console.log(formula_1 )
      console.log(formula_2 )
      if(formula_1 >n){
        console.log('prime:' +formula_1)
        break;
      }
      if(formula_2 >n){
        console.log('prime:' +formula_2)
        break;
      }
    }
 
      
   }
    
  

  let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  // // 
//   console.log(str.length)
//   // console.log(str)
//   let cell1="";
//   let cell2 = "";
//   let cell3 ="";
//   let cell4 ="";
//   let cell5 ="";
// for(let i =0;i<str.length;i++){
//   //console.log(str[i] ==='\n')
//   if(str[i] ==='\n'){
//     console.log(i)
// }
    
//   if(i<=22){
//     cell1 = cell1 + str[i]
//   }
//   if(i >=23 && i<=41){
//     cell2 = cell2 + str[i]
//   }
//   if(i >=42 && i<=60){
//     cell3 = cell3 + str[i]
//   }
//   if(i >=62 && i<=85){
//     cell4 = cell4 + str[i]
//   }
//   if(i >=86 && i<=115){
//     cell5 = cell5 + str[i]
//   }
//   }
// console.log(cell1,cell2,cell3,cell4,cell5)

// let arr = str.split('\n')
//  console.log(arr)


// console.log(str2.split('\n'))





//Part 3
let arr = str.split(',').join(' ');
  let cell1="";
  let cell2 = "";
  let cell3 ="";
  let cell4 ="";
  let cell5 ="";
  let newLineIndex=[];
for(let i =0;i<arr.length;i++){
  
  if(arr[i] ==='\n'){
  
    newLineIndex.push(i)
  }
}


for(let i =0;i<arr.length;i++){
 
    if(i<newLineIndex[0]){
      cell1 = cell1 +arr[i]
    }else if (i>=newLineIndex[0] && i<=newLineIndex[1]){
      cell2= cell2 +arr[i];
    }else if (i>=newLineIndex[1] && i<=newLineIndex[2]){
      cell3= cell3 +arr[i];
    }else if (i>=newLineIndex[2] && i<=newLineIndex[3]){
      cell4= cell4 +arr[i];
    }else if(i>newLineIndex[3]){
      cell5 = cell5 +arr[i]
    }

}
//console.log(newLineIndex)
console.log(cell1,cell2,cell3,cell4,cell5)



//testing to see if it work on other string

// let str= "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";


// let arr = str.split(',').join(' ');
//   let cell1="";
//   let cell2 = "";
//   let cell3 ="";
//   let cell4 ="";
//   let cell5 ="";
//   let newLineIndex=[];
// for(let i =0;i<arr.length;i++){
  
//   if(arr[i] ==='\n'){
  
//     newLineIndex.push(i)
//   }
// }


// for(let i =0;i<arr.length;i++){
 
//     if(i<newLineIndex[0]){
//       cell1 = cell1 +arr[i]
//     }else if (i>=newLineIndex[0] && i<=newLineIndex[1]){
//       cell2= cell2 +arr[i];
//     }else if (i>=newLineIndex[1] && i<=newLineIndex[2]){
//       cell3= cell3 +arr[i];
//     }else if (i>=newLineIndex[2] && i<=newLineIndex[3]){
//       cell4= cell4 +arr[i];
//     }else if(i>newLineIndex[3]){
//       cell5 = cell5 +arr[i]
//     }

// }
// //console.log(newLineIndex)
// console.log(cell1,cell2,cell3,cell4,cell5)
