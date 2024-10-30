let cantidad_resultados = document.getElementById('input_buscar');
let boton_buscar = document.getElementById('boton_buscar');
let url_base = "https://pokeapi.co/api/v2/pokemon/";
let id_pokemon = document.getElementById('id_pokemon');
let nombre_pokemon = document.getElementById('nombre_pokemon');
let peso_pokemon = document.getElementById('peso_pokemon');

//Llamamos al contenedor de la tabla, creamos la tabla y su fila de cabeza
const contenedor_resultados = document.getElementById('contenedor_resultados');
const tabla = document.createElement('table');
const fila_cabeza =  document.createElement('tr');
const numero = document.createElement('th');
const nombre = document.createElement('th');
const detalles = document.createElement('th');
numero.textContent = "#";
nombre.textContent = "Nombre";
detalles.textContent = "Detalles";

fila_cabeza.appendChild(numero);
fila_cabeza.appendChild(nombre);
fila_cabeza.appendChild(detalles);

function buscarResultados(){
    console.log(cantidad_resultados.value);
    const cantidad = parseInt(cantidad_resultados.value);
    console.log(cantidad);

    //Borramos el contenido existente en la tabla y agregamos la fila de cabeza
    tabla.innerHTML = '';
    tabla.appendChild(fila_cabeza);

    //Creamos un bucle que recorrera los resultados uno por uno
    for(let i=1; i<=cantidad ; i++){
        console.log(i);
        //url sera la url base que le dimos concatenado con el numero del pokemon a analizar
        var url = url_base + i;

        // pedimos los datos a la api con fetch
        fetch(url)
            .then((response)=>{
                //convertimos la respuesta de la api a JSON
                return response.json();
            })
            .then((data)=>{
                const fila =  document.createElement('tr');
                const numero = document.createElement('td');
                const nombre = document.createElement('td');
                const detalles = document.createElement('button')

                detalles.textContent = "VER";

                numero.textContent = i;
                nombre.textContent = data.name;
                detalles.addEventListener('click', function agregarDetalle(){
                    id_pokemon.textContent = i;
                    nombre_pokemon.textContent = data.name;
                    peso_pokemon.textContent = data.weight; 
                })

                fila.appendChild(numero);
                fila.appendChild(nombre);
                fila.appendChild(detalles);

                tabla.appendChild(fila);
                console.log(i);
            })
    }
    contenedor_resultados.appendChild(tabla);
}

