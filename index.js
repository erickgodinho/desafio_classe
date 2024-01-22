class heroi {
    constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }
    
    atacar(){
        let ataque = "";
            switch(this.tipo){
                case "mago":
                ataque = "usou magia";
                break;

                case "guerreiro":
                ataque = "usou espada";
                break

                case "monge":
                ataque = "usou artes marciais";
                break

                case "ninja":
                ataque = "usou shuriken";
                break

                default:
                    ataque = " ataque estranho";
            }
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const guerreiro = new heroi("Arthur", 28, "guerreiro");
const ninja = new heroi("leonardo", 18, "ninja")

guerreiro.atacar();
ninja.atacar();