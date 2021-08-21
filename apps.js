
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
document.getElementById("storage1-cost").addEventListener('click',function(){
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
    applyPromoCode();   
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
    totalAmount.innerText = grandTotal;
    return grandTotal;
}
// Apply Promocode
function applyPromoCode(){
    const amount = updateTotal();
    const commission = amount * (20/100);
    const inputField = document.getElementById('inputfield');
    const inpultvalue = inputField.value;
    if(inpultvalue == 'stevekaku'){
        totalAmount.innerText = amount-commission;
    }   
    else{
        totalAmount.innerText = amount;
    }
    inputField.value='';
    return totalAmount.innerText;
}

const common = document.getElementById("common-cost");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalCost = document.getElementById("total-cost");