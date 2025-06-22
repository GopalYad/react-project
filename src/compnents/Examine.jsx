import React from 'react';

const Examine = () => {
   //logical or and and operator
   function getName(name){
    // console.log(name)
    return name;
   }
   let a = true;
   let b = false;
   console.log(a&&getName('Gopal'))
   console.log(b||getName('Gopal'))

   //template literals
   console.log(`my name is ${'gopal    yadav'}`)

   //deconstructor
   const productName = `Laptop 1`
   const prise = `$1000`
   const product = {
    productName,
    prise
   }
   console.log(product)

   //array destructuring
   const array = ['apple','banana','manago'];
   const[first]=array
   console.log(first)

    //rest operator
    const array1=[1,2,3];
    const array2=[4,5,6];
    console.log([...array1,...array2])

    //spread operator
    

    return(
        <div></div>
    )
}

export default Examine;