
// Memory Section
document.getElementById("memory1-cost").addEventListener('click',function(){
    memoryCost.innerText = 0;
    updateTotal();
})

document.getElementById("memory2-cost").addEventListener('click',function(){
    memoryCost.innerText = 180;
    updateTotal();
})
// Storage Section 
z=document.getElementById("storage1-cost").addEventListener('click',function(){
    storageCost.innerText = 0;
    updateTotal();
})

document.getElementById("storage2-cost").addEventListener("click",function(){
    storageCost.innerText = 100;
    updateTotal();
})
document.getElementById("storage3-cost").addEventListener("click",function(){
    storageCost.innerText = 180;
    updateTotal();
})

// Delivery Section 
document.getElementById("free-cost").addEventListener("click",function(){
   deliveryCost.innerText=0;
   updateTotal();
})
document.getElementById("charge-cost").addEventListener("click",function(){
    deliveryCost.innerText=20;
    updateTotal();
})

// Working Apply Button
document.getElementById("apply").addEventListener('click',function(){
    // let x = updateTotal().value;
    // let commision = x * 2;
    // console.log(commision);
    const inputField = document.getElementById('inputfield');
    if(inputField == 'stevekaku'){

    }

    
})
// Add Total cost
function updateTotal(){
    const bestPrice = parseInt(common.innerText);
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storageCost.innerText);
    const devliveryPrice = parseInt(deliveryCost.innerText);
    const grandTotal= bestPrice +  memoryPrice + storagePrice + devliveryPrice;
    totalCost.innerText = grandTotal;
    const totalAmount = document.getElementById("totalAmount");
    const inputField = document.getElementById('inputfield');
    if(inputField == 'stevekaku'){

    }
    totalAmount.innerText = grandTotal;
    
}
function promocode(){


}

const common = document.getElementById("common-cost")
//console.log(common)
const memoryCost = document.getElementById("memory-cost")
const storageCost = document.getElementById("storage-cost")
const deliveryCost = document.getElementById("delivery-cost")
const totalCost = document.getElementById("total-cost")