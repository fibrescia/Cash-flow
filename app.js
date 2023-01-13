
let movimientos = document.getElementById(`movimientos`)
let gasto_total=0
let dinero_ingresado=0

const cargar_dinero = (event) => {

    event.preventDefault()
    let monto = Number(event.target.dinero__disponible.value)
    dinero_ingresado=monto
    /* let balance__izq=document.getElementById(`balance__izq`) */
    balance__disponible.innerHTML=`<span class="verde">$ </span>${monto}`
    
}
const gastar_dinero = (event) => {

    event.preventDefault()
    let monto = Number(event.target.monto__gasto.value)
    let nombre_gasto=event.target.nombre__gasto.value
    /* let gasto__total= (document.getElementById(`gasto__total`)) */
    
    if(monto!=0){
    let lista_gastosHTML=document.getElementById(`lista_gastos`)
    let nuevo_gasto=document.createElement(`li`)
    nuevo_gasto.innerHTML= `<div class="contenedor_tacho_nombre">
    <i class="bi bi-trash"></i>
    <p class="lista__gasto_nombre" id="gasto_individual_nombre">${nombre_gasto}</p></div><p class="lista__gasto_monto">$ ${monto}</p>`
    console.log(nuevo_gasto)

    lista_gastosHTML.appendChild(nuevo_gasto)
    
    gasto_total+=monto
    balance__gastos.innerHTML=`<span class="rojo">$ </span>${gasto_total}`
    }
}

const calcular_balance = (event) => {
    event.preventDefault()
    let balance=dinero_ingresado-gasto_total

    balance>=0 ? balance__cuenta.innerHTML=`<span class="verde">$ ${balance}</span>` : balance__cuenta.innerHTML=`<span class="rojo">$ ${balance}</span>`
        
}

movimientos.addEventListener(`submit`,cargar_dinero)
movimientos.addEventListener(`submit`,gastar_dinero)
movimientos.addEventListener(`submit`,calcular_balance)