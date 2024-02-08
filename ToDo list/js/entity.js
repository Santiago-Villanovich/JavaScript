class Tarea{
    constructor(nombre,descripcion){
        this._nombre = nombre;
        this._descripcion = descripcion || null;
    }

    get nombre(){return this._nombre
    }
    set nombre(name){this._nombre = name
    }

    get descripcion(){return this._descripcion
    }
    set descripcion(desc){this._descripcion = desc
    }
}