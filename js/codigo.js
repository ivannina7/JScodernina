


console.log ("Bievenido a CholiPetShop");

let login = prompt ("ingrese su nombre");




class producto{
    constructor (nombre, precio, kg, stock){
        this.nombre= nombre;
        this.precio= precio;
        this.kg= kg;
        this.stock= stock;
    }

    get_datos(){
        console.log("nombre", this.nombre);
        console.log("el precio es de ", this.precio);
        console.log("los kg que trae son ", this.kg);
        console.log("el estock es de unidades", this.stock);

    }
}

let productos_com_perros = [];

productos_com_perros.push(new producto ("pedigree", 12000, 8, 15));
productos_com_perros.push(new producto ("royal canin", 14000, 4, 5));
productos_com_perros.push(new producto ("eukanua", 11000, 10, 6));
productos_com_perros.push(new producto ("sieber", 9000, 15, 16));
productos_com_perros.push(new producto ("purina proplan", 13000, 7, 12));


console.log("esta es la lista de productos");
console.log(productos_com_perros);


//h function map//

console.log("Obtenga un descuento abonando en efectivo");
console.log("A continuacion le mostramos la lista de precios")


function descuento_efect(producto){

    let descuento = producto.precio * 0.15;
    
    return{
        nombre: producto.nombre,
        precio: producto.precio - descuento,
        kg: producto.kg,
        stock: producto.stock,
    }
}

let resultado_map = productos_com_perros.map(descuento_efect);
console.log(resultado_map);


// h.function    .filter//


let busqueda_kg = prompt("ingrese que kg desea buscar")
console.log("los productos en stock disponibles segun su busqueda son: ")

function mayor_10kg (kilos){
    return kilos.kg >= busqueda_kg
}

let resrultado_filtro = productos_com_perros.filter(mayor_10kg);
console.log(resrultado_filtro);  






// function interes para pagos con tarjeta de credito//

function interes (monto, cuotas){
    if (cuotas == 3){
        let interes = monto * 0.15
        return interes;
    }
    else if (cuotas == 6){
        let interes = monto * 0.70
        return interes;
    }
    else (cuotas != 3, 6);{
        alert ("El numero de cuotas solicitado no es correcto, revisar por favor");
    }
}

console.log("Si desea abonar con tarjeta de credito lo puede hacer en 3 o 6 cuotas, A continuacion le mostramos la lista de precios");

//let cuotas = prompt ("Ingrese en cuantas cuotas le gustaria pagar, 3 o 6");//
// DEJO EL PROMPT DE CUOTAS A MODO DE COMENTARIO YA QUE EN UN FUTURO LA IDEA SERIA IMPLEMENTAR ESATA FUNCION EN UN BOTON EN CASE DE QUE EL CLIENTE QUIERA ABONAR CON TARJETA//

//SEGUN SI EL CLIENTE ELIGE EN 6 O 3 CUOTAS, USARIA LA H.ORDEN FUNC .MAP USANDO LA VARIABLE INTERES PARA PODER MOSTRAR UNA LISTA CON LOS PRECIOS INCLUIDOS EL INTERES//








for (let i = 0; i < 3; i = i + 1){
    let Mybusqueda = prompt ("Escriba tres articulos de su interes para ver las mejores ofertas del dia");   
}
