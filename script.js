let peso= 20;
let resultado;

if (peso <= 30){
    resultado=holliday(peso)
    console.log("Volumen diario " + resultado+"cc")
    console.log("Mantenimiento  " + mantenimiento(resultado)+" cc/hr")
    console.log("Mantenimiento 1.5  "+ mymedio(resultado)+" cc/hr")
} else{
    console.log(superficie(peso))
    console.log("x 1500 Volumen diario " + superficie1500 (peso)+"cc")
    console.log("x 2000 Volumen diario " + superficie2000 (peso)+"cc")
}

function holliday(peso){
    let resultado;
     if (peso > 20 ) {
    resultado = (((peso - 20) * 20)+1500)    
    } else if(peso < 20 && peso > 10){
    resultado = (((peso-10)*50)+1000)    
    } else {
    resultado= (peso * 100);
    } 
    return resultado
}

function superficie (peso){
    let resultado;
    resultado= (((peso * 4)+ 7)/ (peso + 90))
    return resultado
}


function superficie1500 (valor){
    let resultado;
    resultado= ((((valor * 4)+ 7)/ (valor + 90))*1500)
    return resultado
}

function superficie2000 (peso){
    let resultado;
    resultado= ((((peso * 4)+ 7)/ (peso + 90))*2000)
    return resultado
}

function mantenimiento (m){
    
    let manten;
    manten=(m/24)
    return manten
}

function mymedio (m){
    let mant;
    mant=(((m)/24)*1.5)
    return mant
}
