// programe com factory
class Pessoa {}
// programe voltado a interface e nao a implementacao
let p: Pessoa = new Pessoa();

class Pato {}

class PatoReal extends Pato {}

class PatoDeCaca extends Pato {}

class PatoDeBorracha extends Pato {}

function qualPato(ocasiao: string): Pato | null {
    let p: Pato | null = null;
    if (ocasiao === "piqunique")
        p = new PatoReal();
    else if (ocasiao === "caça")
        p = new PatoDeCaca();
    else if (ocasiao === "banheira")
        p = new PatoDeBorracha();
    else if (ocasiao === "truco")
        p = new Pato();
    return p;
}

let ocasioes: string[] = ['piqunique', 'caça', 'banheira', 'truco'];

console.log(qualPato(ocasioes[Math.floor(Math.random() * ocasioes.length)]));
