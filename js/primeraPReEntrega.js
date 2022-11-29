
let nombre = prompt("Ingrese su Nombre")
alert(`Bienvenido ${nombre}, que desea llevar?`)

let pedidos
let i = 1

function menu(pedidos){
    
    pedidos = prompt(`Elija una de las opciones del menu:
    1=Hamburguesa
    2=Pizza
    3=Papas fritas`)

switch(pedidos){
    case "1":
        alert("Usted a elejido Hamburguesa")
        tipodepapasfritas = Number(0)
        tipodepizza = Number(0)
        hamburguesa()
        break;
    case "2":
        alert("Usted a elejido pizza")
        tipodepapasfritas = Number(0)
        tipodehamburguesa = Number(0)
        pizza()
        break;
    case "3":
       alert("Usted a elegido Papas fritas")
        tipodepizza = Number(0)
        tipodehamburguesa = Number(0)
       papasfritas()
        break;
        
    default:
        alert("Ninguna de las opciones anteriores")
        menu()
        break;

} 

}
menu(pedidos)

function hamburguesa(){
    tipodehamburguesa = prompt(`${nombre} Elija que clase de hamburguesa quiere:
    1: Simple $500
    2: Jamon y queso $900
    3: Chedar, panceta, huevo frito $1200
    4: Volver a eleguir del menu`)
    
    
switch(tipodehamburguesa){
    case "1":
        alert("Usted a elegido hamburguesa simple")
        tipodehamburguesa = Number(500)
        hambur = "Hamburguesa Simple"
        frita = "-"
        bebida = "-"
        piza = "-"
        bebidas()
        break;
    case "2":
        alert("Usted a elegido hamburguesa Jamon y queso")
        tipodehamburguesa = Number(900)
        hambur = "Hamburguesa con Jamon y queso"
        frita = "-"
        piza = "- "
        bebida = "- "
        bebidas()
        break;
    case "3":
        alert("Usted a elegido hamburguesa chedar, panceta, huevo frito")
        tipodehamburguesa = Number(1200)
        hambur = "Hamburguesa con chedar, panceta, huevo frito"
        frita = "- "
        piza = " -"
        bebida = "- "
        bebidas()
        break;    
    case "4":
        alert("Usted a eleguido volver al menu")
        menu()
        pedidos
        break;
            
    default:
        alert("Ninguna de las opciones anteriores")
        hamburguesa()
        break;

} 
}


function pizza(){
    tipodepizza = prompt(`${nombre} Elija que clase de pizza quiere:
    1: Muzzarela $1000
    2: Napolitana $1400
    3: Calabresa $1600
    4: Fugazzeta $1500
    5: Jamon y morron $1600
    6: Volver a eleguir del menu`)
    
switch(tipodepizza){
    case "1":
        alert("Usted a elegido pizza muzzarela")
        tipodepizza = Number(1000)
        hambur = "- "
        frita = "- "
        bebida = "- "
        piza = "Pizza Muzzarela"
        bebidas()
        break;
    case "2":
        alert("Usted a elegido pizza napolitana")
        tipodepizza = Number(1400)
        hambur = "-"
        frita = "- "
        bebida = "- "
        piza = "Pizza Napolitana"
        bebidas()
        break;
        
    case "3":
        alert("Usted a eleguido pizza calabresa")
        tipodepizza = Number(1600)
        hambur = "- "
        frita = "- "
        bebida = "- "
        piza = "Pizza Calabresa"
        bebidas()
        break;
            
    case "4":
        alert("Usted a eleguido pizza fugazzeta")
        tipodepizza = Number(1500)
        hambur = "- "
        bebida = "- "
        frita = "- "
        piza = "Pizza de Fugazzeta"
        bebidas()
        break;

    case "5":
        alert("Usted a eleguido pizza jamon y morron")
        tipodepizza = Number(1600)
        hambur = "- "
        bebida = "- "
        frita = "- "
        piza = "Pizza Jamon y morron"
        bebidas()
        break;
    case "6":
        alert("Usted a eleguido volver al menu")
        menu(pedidos)
        break;
    default:
        alert("Ninguna de las opciones anteriores")
        pizza()
        break;

} 
}
function papasfritas(){
    tipodepapasfritas = prompt(`${nombre} Elija que clase de papas fritas quiere:
    1: Simple $300
    2: Chedar $400
    3: Chedar y panceta $500
    4: Chedar y cebolla de verdeo $500
    5: Volver a eleguir del menu`)
    
switch(tipodepapasfritas){
    case "1":
        alert("Usted a elegido Papas fritas simple")
        tipodepapasfritas = Number(300)
        hambur = "- "
        piza = "- "
        bebida = "- "
        frita = "Papas fritas Simple"
        bebidas()
        break;
    case "2":
        alert("Usted a elegido papas fritas con chedar")
        tipodepapasfritas = Number(400)
        hambur = "- "
        piza = "- "
        bebida = "- "
        frita = "Papas fritas con chedar"
        bebidas()
        break;
        
    case "3":
        alert("Usted a elegido papas fritas con chedar y panceta")
        tipodepapasfritas = Number(500)
        hambur = "- "
        piza = "- "
        bebida = "- "
        frita = "Papas fritas con chedar y panceta"
        bebidas()
        break;
            
    case "4":
        alert("Usted a elegido papas fritas con chedar y cebolla de verdeo")
        tipodepapasfritas = Number(500)
        hambur = "- "
        piza = "- "
        bebida = "- "
        frita = "Papas fritas con chedar y cebolla de verdeo"
        bebidas()
        break;
    case "5":
        alert("Usted a eleguido volver al menu")
        menu(pedidos)
        break;
    default:
        alert("Ninguna de las opciones anteriores")
        papasfritas()
        break;

} 
}
function bebidas(){
    tipoDeBebidas = prompt(`${nombre} Elija que clase de bebida quiere:
    1: Agua 500ml $150
    2: Coca cola 500ml $300
    3: Sprite 500ml $300
    4: Fanta 500ml $300
    5: Volver a eleguir del menu`)

    
switch(tipoDeBebidas){
    case "1":
        alert("Usted a elegido Agua")
        tipoDeBebidas = Number(150)
        bebida = "Agua"
        break;
    case "2":
        alert("Usted a elegido Coca cola")
        tipoDeBebidas = Number(300)
        bebida = "Coca cola"
        break;
        
    case "3":
        alert("Usted a elegido Sprite")
        tipoDeBebidas = Number(300)
        bebida = "Sprite"
        break;
            
    case "4":
        alert("Usted a elegido Fanta")
        tipoDeBebidas = Number(300)
        bebida = "Fanta"
        break;
    case "5":
        alert("Usted a eleguido volver al menu")
        menu(pedidos)
        break;
        
            
    default:
        alert("Ninguna de las opciones anteriores")
        bebidas()
        break;

} 
}

cuenta = (tipodehamburguesa + tipodepapasfritas + tipodepizza + tipoDeBebidas)
alert(`${nombre} su pedido esta compuesto por: 
${hambur} 
${piza} 
${frita} 
con ${bebida}
Total a pagar` + " " + cuenta )

let dinero = Number(prompt(`${nombre} Ingrese cuanto efectivo tiene`))
let vuelto = dinero - cuenta
let tarjeta = true

if ( dinero >= cuenta){
    alert( " Puede pagar en efectivo")
    alert( `Pago realizado, ${nombre} disfrute su comida y vuelva pronto.
    Su vuelto es de $` + " " + vuelto)
}
else if (tarjeta){
    alert( "Puede pagar con tarjeta")
    alert(`Pago realizado, ${nombre} disfrute su comida y vuelva pronto.`)
}
else{
    alert("Dinero insuficiente")
}  

