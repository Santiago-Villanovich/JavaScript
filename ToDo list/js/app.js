const tareas = [
    new Tarea('numero1','esta es mi primera tarea'),
    new Tarea('segunda')
];

function mostrarTareas(){
    console.log("cargando tareas")
    let texto = ''
    let index = 0
    for(let tarea of tareas){
        if(tarea.descripcion != null){
            texto += `<label for="check${index}"><input id="check${index}" type="checkbox">${tarea.nombre} - ${tarea.descripcion}</label>`
        
        }else{
            texto += `<label for="check${index}"><input id="check${index}" type="checkbox">${tarea.nombre}</label>`
        }
        index ++
        console.log(tarea)
    }
    
    document.getElementById('tareas').innerHTML = texto
}

function agregarTarea(){
    const formu = document.forms['formu']
    const nombre = formu['nombre']
    const desc = formu['descripcion']

    if(nombre.value != ''){
        const tarea = new Tarea(nombre.value,desc.value)
        tareas.push(tarea)
        nombre.value = ""
        desc.value = ""
        mostrarTareas()
    }else{
        console.log("no hay parametros")
    }
}