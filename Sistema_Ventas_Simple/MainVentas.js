class Producto
{
    static ContadorProductos = 0;

    constructor(nombre,precio){
        this._IdProducto = ++Producto.ContadorProductos;
        this._Nombre = nombre;
        this._Precio = precio;
    }

    get IdProducto(){ return this._IdProducto }

    get Nombre(){ return this._Nombre }
    set Nombre(nombre){ this._Nombre = nombre }
    
    get Precio(){ return this._Precio } 
    set Precio(precio){ this._Precio = precio }

    toString(){
        return `ID: ${this._IdProducto} Nombre: ${this._Nombre} Precio:$${this._Precio}`;
    }
}

class Orden
{

    static ContadorOrdenes = 0;

    static get Max_Productos(){
        return 5;
    }

    constructor(){
        this._IdOrden = ++Orden.ContadorOrdenes;
        this._Productos = [];
    }

    get IdOrden(){ return this._IdOrden;}

    agregarProducto(producto){
        if(this._Productos.length < Orden.Max_Productos){
            this._Productos.push(producto);
        
        }else{
            console.log('No se puede agregar productos ya que la Orden esta llena')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._Productos){
            totalVenta += producto.Precio;
        }
        return totalVenta;
    }

    imprimirOrden(){
        let productosOrden = '';
        for(let producto of this._Productos){
            productosOrden += '\n' + producto.toString() ;
        }

        console.log(`Su orden: ${this.IdOrden}\n-----------------------${productosOrden}\n\nValor total:$ ${this.calcularTotal().toString()}`);
    }
}

let Or1 = new Orden();
let P1 = new Producto('Jean',6000);
let P2 = new Producto('Remera Over',2000);
let P3 = new Producto('Camisa',4500);

Or1.imprimirOrden();


