class DispositivoEntrada{
    
    constructor(tipoEnt,marca){
        this._tipoEntrada = tipoEnt;
        this._marca = marca;
    }

    get TipoEntrada(){ return this._tipoEntrada}
    set TipoEntrada(tipo){this._tipoEntrada = tipo}

    get Marca(){return this._marca}
    set Marca(marca){this._marca = marca}
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipo,marca){
        super(tipo,marca);
        this._IdRaton = ++Raton.contadorRatones;
        
    }

    get IdRaton(){return this._IdRaton}

    toString(){
        return `[ ID:${this._IdRaton} - Marca:${this._marca} - Tipo de Entrada:${this._tipoEntrada} ]`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipo,marca){
        super(tipo,marca);
        this._IdTeclado = ++Teclado.contadorTeclados;
        
    }

    get IdTeclado(){return this._IdTeclado}

    toString(){
        return `[ ID:${this._IdTeclado} - Marca:${this._marca} - Tipo de Entrada:${this._tipoEntrada} ]`
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca,tamano){
        this._IdMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get IdMonitor(){return this._IdMonitor}

    get Marca(){return this._marca}
    set Marca(marca){this._marca = marca}
    
    get Size(){return this._tamano}
    set Size(tamano){this._tamano = tamano}

    toString(){
        return `[ ID:${this._IdMonitor} - Marca:${this._marca} - Size:${this._tamano} ]`
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nom,Monitor,Teclado,Raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nom
        this._monitor = Monitor
        this._teclado = Teclado
        this._raton = Raton
    }

    get IdComputadora(){return this._idComputadora}

    get Nombre(){return this._nombre}
    set Nombre(nom){this._nombre = nom}

    get Monitor(){return this._monitor}
    set Monitor(mon){this._monitor = mon}

    get Teclado(){return this._teclado}
    set Teclado(tec){this._teclado = tec}

    get Raton(){return this._raton}
    set Raton(rat){this._raton = rat}

    toString(){
        return `Computadora ID:${this._idComputadora} - Nombre:${this._nombre}\nMonitor:${this._monitor.toString()}\nTeclado:${this._teclado.toString()}\nRaton:${this._raton.toString()}`;
    }

}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get IdOrden(){return this._idOrden}
    
    agregarComputadora(Computadora){
        this._computadoras.push(Computadora);
    }

    imprimirOrden(){
        let totalCompus = ''
        for(let comp of this._computadoras){
            totalCompus += `------------------------------------\n${comp.toString()}\n`
        }

        console.log(`Su orden:${this._idOrden} tiene:\n`+ totalCompus)
    }
}

let T1 = new Teclado('USB','LogiTech')
let R1 = new Raton('USB','LogiTech')
let M1 = new Monitor('Samsung','24"')

let C1 = new Computadora('Logi',M1,T1,R1)
let C2 = new Computadora('Noga',M1,T1,R1)
let C3 = new Computadora('Sam',M1,T1,R1)

let or = new Orden()
or.agregarComputadora(C1)
or.agregarComputadora(C2)
or.agregarComputadora(C3)

or.imprimirOrden()