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
})