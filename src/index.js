/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    
    return newPrice;
}
//Intl
//1. dar fomrato a fechas
//2. dar formato a monedas


//web api
//conectarnos al server
window.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convenitrla en JSON
.then(respuesta => respuesta.json())
//JSON -> data -> Rendeirzar info browser
.then((dataJson) => {
    const todosLosItems = [];

    dataJson.data.forEach((item)=>{
        //crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;
        //crear titulo
        console.log(item.name);
        const titulo = document.createElement('h2');
        titulo.textContent = item.name;
        titulo.style.fontSize = "3rem";
        titulo.className =  ""; //para agregar clases de estilo 
        titulo.addEventListener("click", ()=>{
            window.alert("Hola")
        })
        //el llamado de alert de arriba tambien su puede hacer en toda la app y especificando el tag asi: 
        //DELEGACION DE EVENTOS: A
        appNode.addEventListener("click", (event) =>{
            if (event.target.nodeName === 'h2') {
                window.alert("Hola")
            }
        })




        //crear precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        
        //Wrap price & title
        const container = document.createElement('div')
        container.append(imagen, titulo, price);
        /*
        container.appendChild(imagen);
        container.appendChild(titulo);
        container.appendChild(price);
        */
       todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
});
