// Informar todos os números entre 1000 e 1999 que divididos por 11 obtemos o resto 5: (utilizando o for)
/*
for ( seja  i  =  1000 ;  i  <=  1999 ;  i ++ ) {
    if (  i  %  11  ==  5  ) {
        console.log ( ` ${ i } dividido por 11 tem como resto valor igual a 5.` )
    }
}

// Ler 10 números e informares são pares e quais são quantos iguais: (utilizando o para quantos)

var  pares  =  0 ,
    impera  =  0 ;

for ( seja  i  =  1 ;  i  <=  10 ;  i ++ ) {

    let  num  =  Number ( prompt ( "Informe um número: " ) )

    if (  num  %  2  ==  0 ) {
        pares ++
    } senão {
        impede ++
    }
}
alerta (
    `Total de números pares: ${ pares } \n
     Total de números ímpares: ${ impares }   
    `
)

// Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. Total de pessoas com mais de 50 anos. O programa termina quando a idade for igual a -99 (utilizando o while)

 var  menosDe21  =  0
 var  maisDe50  =  0

 enquanto ( idade  !=  - 99 ) {
     var  idade  =  Number ( prompt ( "Informe a sua idade " )
     if ( idade  <  21 ) {
         menosDe21 ++
     }  else  if  ( idade  >  50 ) {
         maisDe50 ++
     }
 }

 consola . log ( `Total de pessoas com menos de 21 anos: ${ menosDe21 } \n Total de pessoas com mais de 50 anos: ${ maisDe50 } ` )

//Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos pacientes de uma região. Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (utilizando o while)

//o número de pessoas calmas;
//o número de mulheres nervosas;
// o número de homens agressivos;
// o número de outros calmos;
// o número de pessoas nervosas com mais de 40 anos;
// o número de pessoas calmas com menos de 18 anos.

var  i  =  0 ,
    pessoasCalmas  =  0  ,
    mulheresNervosas  =  0 ,
    homensAgressivos  =  0 ,
    outrosCalmos  =  0 ,
    nervosoMais40  =  0 ,
    calmosMenos18  =  0 ,
    idade  =  0 ,
    humor  =  0 ;

enquanto ( i  <=  150 )  {
    idade  =  Number ( prompt ( 'Qual a sua idade ?' ) ) )
    sexo  =  Number ( prompt ( 'Qual o seu gênero ?\n 1 - Masculino\n 2 - Feminino\n 3 - Outros' ) )
    humor  =  Number ( prompt ( 'Com qual dessas personalidades você mais se identifica ?\n 1 - Calmo\n 2- Nervoso\n 3 - Agressivo' ) ) )

    if  ( humor  ==  1  ) {
        pessoasCalmas ++
    }  else  if  ( sexo  ==  2  &&  humor  ==  2 ) {
        mulheresNervosas ++
    }  else  if  ( sexo  ==  1  &&  humor  ==  3 ) {
        homensAgressivos ++
    }  else  if  ( sexo  ==  3  &&  humor  ==  1 ) {
        outrosCalmos ++
        pessoasCalmas ++
    }  senão  if  ( idade  >  40  &&  humor  ==  2 ) {
        nervosoMais40 ++
    } else  if  ( idade  <  18  &&  humor  ==  1 ) {
        calmosMenos18 ++
        pessoasCalmas ++
    }

    eu ++
}

alerta (
    `Coleta de dados\n
    Pessoas calmas: ${ pessoasCalmas } \n
    Mulheres nervosas: ${ mulheresNervosas } \n
    Homens agressivos: ${ homensAgressivos } \n
    Outros calmos: ${ outrosCalmos } \n
    Nervosos com mais de 40 anos: ${ nervosMais40 } \n
    Calmos com menos de 18: ${ Menos18 }
    `
)

//Crie um programa que leia um número do teclado até que encontre um igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)

var  soma  =  0
fazer {
    var  num  =  Number ( prompt ( 'Digite um número' ) )
    soma  +=  num
} while ( num  !=  0 )

consola . log ( `A soma total de todos os números digitados é igual a: ${ soma } ` )

// Escrever um programa que vários números inteiros no teclado. E no final imprimir a média dos números múltiplos de 3. Para digitar 0(zero).(DO...WHILE)

var  multiploDeTres  =  0
var  numDigitado  =  0
var  mediaDosMultiplos  =  multiploDeTres  /  numDigitado
fazer {
    var  num  =  Number ( prompt ( 'Informe um número\n Digite 0 para sair.' ) )
    if ( num  %  3  ==  0 ) {
        multiploDeTres ++
        numDigitado ++
    } senão {
        numDigitado ++
    }
} while ( num  !=  0 )

alert ( `A média dos múltiplos de 3 é igual a: ${ mediaDosMultiplos } ` )
*/