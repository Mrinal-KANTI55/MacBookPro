let totalPrice ;
let finalPrice;
const setFinalPriceWithoutOfferLoc = document.getElementById('withoutPomoOffer');
const setFinalPriceLoc = document.getElementById('withPomoOffer');
//for Expatial offer price calculation
function expatialOffer(){
    const prePrice = parseFloat(document.getElementById('currentTotalPrice').innerText);
    const offerPrice = prePrice - ( prePrice * .2);
    return offerPrice;
 }
// calculate price for chooseing extra equipment
function calculateTotalPrice (){
    const baseModelPrice = parseFloat(document.getElementById('basePrice').innerText);
    const exMemoryPrice = parseFloat(document.getElementById('memoryPrice').innerText);
    const exStoragePrice = parseFloat(document.getElementById('extraStoragePrice').innerText);
    const fastDeliveryPrice = parseFloat(document.getElementById('deliveryPrice').innerText);
    totalPrice =baseModelPrice+exMemoryPrice+exStoragePrice+fastDeliveryPrice;
    document.getElementById('currentTotalPrice').innerText=totalPrice;
    setFinalPriceWithoutOfferLoc.innerText=totalPrice;
}
// check pomo code validety
function chackPomoCode(userCode){
    let offerImacPrice=0;
    if(userCode =='stevekako'){
         offerImacPrice =expatialOffer();
         return offerImacPrice;
    }else{
        alert('Not Match');
    }
}
// show unik final imac price with or without offer
function visibleFinalPrice (userCode){
    if (userCode =='stevekako'){
        setFinalPriceLoc.innerText =finalPrice;
        setFinalPriceLoc.style.display='inline';
        setFinalPriceWithoutOfferLoc.style.display='none';
    }
}
// select apple option for better performance 
document.getElementById('apple').addEventListener('click',function(event){
    let pressButton = event.target.id;
    if(pressButton == 'memoryButton8'){
        document.getElementById('memoryPrice').innerText=0;
    }else if (pressButton == 'memoryButton16'){
        document.getElementById('memoryPrice').innerText=180;
    }else if (pressButton == 'storageButton256'){
        document.getElementById('extraStoragePrice').innerText=0;
    }else if (pressButton == 'storageButton512'){
        document.getElementById('extraStoragePrice').innerText=100;
    }else if (pressButton == 'storageButton1'){
        document.getElementById('extraStoragePrice').innerText=180;
    }else if (pressButton == 'deliveryButton25'){
        document.getElementById('deliveryPrice').innerText=0;
    }else if (pressButton == 'deliveryButton21'){
        document.getElementById('deliveryPrice').innerText=20;
    }
    calculateTotalPrice();
});
// for pomo button 
document.getElementById('pomo').addEventListener('click',function(){
    const userCode = document.getElementById('userInput').value;
    document.getElementById('userInput').value='';
    finalPrice= chackPomoCode(userCode);
    visibleFinalPrice (userCode);
});
