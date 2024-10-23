class Pizza{
    preparar() : void{
        console.log("Preparando pizza");
    }
    assar() : void{
        console.log("Assando pizza");
    }
    cortar() : void{
        console.log("Cortando pizza");
    }
    empacotar() : void{
        console.log("Empacotando pizza");
    }
}
class CalabresaPizza extends Pizza{}

class ChocolatePizza extends Pizza{}

class RuculaPizza extends Pizza{}

class SimplePizzaFactory{
    createPizza(tipo : string) : Pizza | null{
        let pizza: Pizza | null = null;
        if(tipo === "calabresa")
            pizza = new CalabresaPizza();
        else if(tipo === "chocolate")
            pizza = new ChocolatePizza();
        else if(tipo === "rucula")
            pizza = new RuculaPizza();
        return pizza;
    }
}

class PizzaStore{
    constructor(private simplePizzaFctory: SimplePizzaFactory){}

    pedirPizza = (tipo : string): Pizza | null => {
        const pizza: Pizza | null = this.simplePizzaFctory.createPizza(tipo);

        pizza?.preparar();
        pizza?.assar();
        pizza?.cortar();
        pizza?.empacotar();
    
        return pizza;
    }
}
let pizzaStore = new PizzaStore(new SimplePizzaFactory());
console.log(pizzaStore.pedirPizza("calabresa"));