//part 1

// let x =100;

// for(let i =1;i<=100;i++){

//   if(i%3 ===0 && i%5===0){
//     console.log('Fizz Buzz '+ i)
//   }else{

//     if(i%3 ===0 ){
//       console.log('Fizz '+i)
//     }else if( i%5===0){
//         console.log('Buzz '+i)
//     }else if(i%3 !==0 && i%5!==0){
//       console.log(i)
//     }

//   }

// }

//part 2;

let n =11;


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
    
  

  
  
