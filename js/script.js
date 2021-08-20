// calculate price for chooseing extra equipment
function calculateTotalPrice (){
    const baseModelPrice = parseFloat(document.getElementById('basePrice').innerText);
    const exMemoryPrice = parseFloat(document.getElementById('memoryPrice').innerText);
    const exStoragePrice = parseFloat(document.getElementById('extraStoragePrice').innerText);
    const fastDeliveryPrice = parseFloat(document.getElementById('deliveryPrice').innerText);
    const totalPrice =baseModelPrice+exMemoryPrice+exStoragePrice+fastDeliveryPrice;
    document.getElementById('currentTotalPrice').innerText=totalPrice;
    return totalPrice;
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