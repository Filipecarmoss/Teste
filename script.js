let valores = [1,2,3,4,5,6,7,8]
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // VETORES ARREY

for( let pos in valores){
    console.log(valores[pos])
} /// forma simplificada do exemplo acima 

let num = [5,8,2,3,9]
num.push() // coloco o que quero dentro do meu vetor
num.sort() // ordena minha lista de ordem crescente 
console.log (num)
console.log(` O vetor tem ${num.length} posições`) // num.length para saber quantos elementos existem no meu vetor
console.log(`O primeiro valor do vetor e ${num[0]}`) // para saber o primeiro valor do meu vetor 
let pos = num.indexOf(8) // para procurar se tem algo especifico no meu vetor caso n tenha fazer teste lógico
if (pos == -1 ){
    console.log(`O valor não foi encontrado!`) // se apresentar o valor -1 mensagem O valor não foi encontrado!
}else{
    console.log(`O valor está na posição ${pos}`) // caso contrario O valor está na posição x 
}