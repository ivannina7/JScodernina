


console.log ("Bievenido a CryptoPrestamos, donde usted va a poder solicitar prestamos en usdt.");

let login = prompt ("ingrese su nombre y apellido");

let dni= prompt ("Ingrese su numero de documento");

let monto = prompt ("ingrese monto a solicitar en usdt por favor");

let cuotas = prompt ("en cuantas cuotas le gustaria devolver el prestamo? 3, 6, 9 o 12");

monto = parseInt(monto);

cuotas = parseInt(cuotas);





function interes (monto, cuotas){
    if (cuotas == 3){
        let interes = monto * 0.11
        return interes;
    }
    else if (cuotas == 6){
        let interes = monto * 0.24
        return interes;
    }
    else if (cuotas == 9){
        let interes = monto * 0.39
        return interes;
    }
    else if (cuotas == 12){
        let interes = monto * 0.57
        return interes;
    }
    else (cuotas != 3, 6, 9, 12);{
        alert ("El numero de cuotas solicitado no es correcto, revisar por favor");
    }
}


let abono_total = monto + interes (monto, cuotas);

abono_total = parseInt(abono_total);


console.log (login + "" + " muchas gracias por solicitar un prestamo");
console.log ("El monto solicitado fue de "+ "" + monto );
console.log ("La cantidad de cuotas que usted eligio son " + "" + cuotas);
console.log ("El monto total a devolver es de "+ " " + abono_total)
console.log ("El pago mensual de la cuota seria de " + " " + (abono_total / cuotas) );

for (let i = 0; i < 3; i = i + 1){
    let crypto = prompt ("Escriba tres monedas en las que le gustaria devolver el prestamo");
    console.log ("Las crypto que usted eligio para devolver su prestamos son ");
    console.log (crypto);
    
}
