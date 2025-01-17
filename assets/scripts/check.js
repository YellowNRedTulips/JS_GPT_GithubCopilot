class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    detalles() {
        return `${this.marca} ${this.modelo}, año ${this.anio}`;
    }
}

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, anio, tipo) {
        super(marca, modelo, anio);
        this.tipo = tipo;
    }

    detalles() {
        return `${super.detalles()}, tipo: ${this.tipo}`;
    }
}

const miVehiculo = new Vehiculo("Toyota", "Corolla", 2022);
console.log(miVehiculo.detalles()); // "Toyota Corolla, año 2022"

const miMoto = new Motocicleta("Honda", "CB500", 2023, "Deportiva");
console.log(miMoto.detalles()); // "Honda CB500, año 2023, tipo: Deportiva"