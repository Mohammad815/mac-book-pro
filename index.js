
function getInputValue(prductName,price){
    const productCost = document.getElementById(prductName+"-cost");
    productCost.innerText = parseInt(price);
    //productCost.innerText = price;
    //var  productPrice = parseInt(productCost.innerText);
    return productCost.innerText;
    
    //total

 //totalamount();
}

        const common = document.getElementById("common-cost");
        const commonValue = Number(1299);
       const memory1 = getInputValue( 'memory',0);
        const memory2 = getInputValue( 'memory',180);
        const storage1 = getInputValue( 'storage',0);
        const storage2 = getInputValue( 'storage',100);
        const storage3= getInputValue( 'storage',180);
        const deliver1 = getInputValue( 'delivery',0);
        const deliver2 = getInputValue( 'delivery',20);
        
        const totalprice = commonValue + memory2 + storage2 + storage3 +   deliver2;
        document.getElementById("total-cost").innerText=totalprice;
        console.log(totalprice);


















// Memory Section
document.getElementById("memory1-cost").addEventListener('click',function(){
    
     getInputValue('memory',0);
    
})

document.getElementById("memory2-cost").addEventListener('click',function(){
   getInputValue('memory',180);
})
// Storage Section 
document.getElementById("storage1-cost").addEventListener('click',function(){
   getInputValue('storage',0);
})

document.getElementById("storage2-cost").addEventListener("click",function(){
    getInputValue('storage',100);
})
document.getElementById("storage3-cost").addEventListener("click",function(){
    getInputValue('storage',180);
})

// Delivery Section 
document.getElementById("free-cost").addEventListener("click",function(){
    getInputValue('delivery',0)
})
document.getElementById("charge-cost").addEventListener("click",function(){
    getInputValue('delivery',20)
})

// function updateValue(product){
//     const productCost = document.getElementById(product+"-cost");
//     const productNumber = parseInt(productCost.innerText);
//     return productNumber;
// }

// function getInputValue(product,price){
//     const productCost = document.getElementById(product+"-cost");
//     const productNumber = parseInt(productCost.innerText)
//     return productNumber;
// }
// function totalamount(){
//     const common = document.getElementById("common-cost");
//     const commonValue = Number(1299);
//    // const memory1 = getInputValue( 'memory',0);
//     const memory2 = getInputValue( 'memory',180);
//     //const storage1 = getInputValue( 'storage',0);
//     const storage2 = getInputValue( 'storage',100);
//     const storage3= getInputValue( 'storage',180);
//     //const deliver1 = getInputValue( 'delivery',0);
//     const deliver2 = getInputValue( 'delivery',20);
    
//     const totalprice = commonValue + memory2 + storage2 + storage3 +   deliver2;
//     document.getElementById("total-cost").innerText=totalprice;
//     console.log(totalprice);
// }