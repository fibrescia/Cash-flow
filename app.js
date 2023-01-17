
let movimientos = document.getElementById(`movimientos`)
let gasto_total=0
let dinero_ingresado=0
let x=0
let lista=document.getElementById(`lista_gastos`)

const boton_switch=document.getElementById(`switch`)
boton_switch.addEventListener(`click`, () => {
    document.body.classList.toggle(`dia`)
})

const cargar_dinero = (event) => {
    event.preventDefault()
    // traemos al JS la variable que ingresamos en el input con el nombre de dinero_ingresado
    if (event.target.dinero__disponible.value != 0 )
    {
    dinero_ingresado = Number(event.target.dinero__disponible.value)
    let ingreso = document.getElementById(`balance_ingreso`)
    ingreso.innerHTML=`<span class="verde">$ </span><span class="blanco">${dinero_ingresado}</span>`
    // se trae a JS del HTML el balance_ingreso y se le aplica el nombre de ingreso, luego se escribe el dinero ingresado en esa variable para que lo refleje en el HTML
    event.target.dinero__disponible.value=``
    
    }  
}

const gastar_dinero = (event) => {
    event.preventDefault()
    
    let monto = Number(event.target.monto__gasto.value)
    let nombre_gasto=event.target.nombre__gasto.value
    event.target.nombre__gasto.value=``
    event.target.monto__gasto.value=``

    if(monto!=0){
    
    let gastos = document.getElementById(`balance_gastos`)
    gasto_total+=monto
    gastos.innerHTML=`<span class="rojo">$ </span><span class="blanco">${gasto_total}</span>`
//en la parte superior de este IF se cargan los montos al contador de gasto_total que aparece en el html como balance_gastos
    let nuevo_gasto=document.createElement(`li`)
    nuevo_gasto.id=`gasto_icono_${x}`
    nuevo_gasto.innerHTML= `<div class="contenedor_tacho_nombre">
    <i class="bi bi-trash" id="icono_${x}"></i>
    <p class="lista__gasto_nombre" id="gasto_individual_nombre">${nombre_gasto}</p></div><p class="lista__gasto_monto">$ ${monto}</p>`
    lista.appendChild(nuevo_gasto)



    let icono_individual=document.getElementById(`icono_${x}`)
        

    icono_individual.addEventListener(`click`,function(){
        let lista = document.getElementById(`lista_gastos`)
        let eliminar_elemento = document.getElementById(`gasto_${icono_individual.id}`)
        lista.removeChild(eliminar_elemento)

        gasto_total=gasto_total-monto
        gastos.innerHTML=`<span class="rojo">$ </span><span class="blanco">${gasto_total}</span>`

        let balance=dinero_ingresado-gasto_total
        let disponible = document.getElementById(`balance__cuenta`)
    
        balance>=0 ? disponible.innerHTML=`<span class="verde">$ ${balance}</span>` : disponible.innerHTML=`<span class="rojo">$ ${balance}</span>`


    })

    //en esta parte del codigo se trae al JS el icono del tacho de cada elemento creado con su propia ID y se le aplica una funcion para que me elimine el elemento li con su mismo numero de ID



    x++    
}
// en esta segunda parte del IF se van cargando y creando nuevos (li) en nuestra lista de gastos, cada uno con su nombre y momnto    
}



const calcular_balance = (event) => {
    event.preventDefault()

    let balance=dinero_ingresado-gasto_total
    let disponible = document.getElementById(`balance__cuenta`)

    balance>=0 ? disponible.innerHTML=`<span class="verde">$ ${balance}</span>` : disponible.innerHTML=`<span class="rojo">$ ${balance}</span>`
    // esta funcion hace que cada vez que se hace click en el simbolo + del HTML se vuelva a calcular el balance disponible, el operador ternario es para saber si el balance disponible aparece con la clase 'rojo' si es negativo o 'verde' si es positivo

}

movimientos.addEventListener(`submit`,cargar_dinero)
movimientos.addEventListener(`submit`,gastar_dinero)
movimientos.addEventListener(`submit`,calcular_balance)