// // Select Except click Sector 
// const common = document.getElementById("common-cost")
// //console.log(common)
// const memoryCost = document.getElementById("memory-cost")
// const storageCost = document.getElementById("storage-cost")
// const deliveryCost = document.getElementById("delivery-cost")
// const totalCost = document.getElementById("total-cost")

function getInputValue(prductName,price){
    const productCost = document.getElementById(prductName+"-cost");
    productCost.innerText = parseInt(price);
     //return productCost.innerText;

     let totalamount  = document.getElementById("total-cost");
     

}

// Memory Section
document.getElementById("memory1-cost").addEventListener('click',function(){
    getInputValue('memory',0);
    //console.log(memory1Cost);
    
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

