console.log("Bar Pedrinhas");
console.log("---------------------------");
var idade = prompt("Voce tem quantos anos?")
if (idade >= 18) {
  console.log("Venha se divertir no melhor bar da região");
}
else
  console.log("Você não pode consumir consumir bebida alcoólica");

console.log("--------------------------")

console.log("Seja bem vindo,ao Bar pedrinhas");

var bebidas = prompt("Fale o seu pedido");

var contador = 1;


do {




  switch (bebidas) {
    case "Skol":
      console.log(bebidas + " - 5,00");
      break;
    case "Heineken":
      console.log(bebidas + " - 9,00");
      break;
    case "Itaipava":
      console.log(bebidas + " - 6,00");
      break;
    case "Skol beats":
      console.log(bebidas + " - 8,00");
      break;
    case "Coca cola":
      console.log(bebidas + " - 5,00");
      break;
    default: console.log("Produto não vendido");
      break;
  }
  contador++;
} while (contador < 5);

console.log("")

console.log("-------------------------------------------")


console.log("1 - dinheiro , 2 - pix , 3 - Cartão")








var pagamento = prompt("Qual a forma de pagamento ?")
var contador = 1;
while (contador <= 3) {
  console.log("Obrigado volte sempre");
} switch (contador) {
  case 2:
    console.log(" Pagamento nao efetuado");
 contador++;


