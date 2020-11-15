# padroes-em-nodejs
*#NodeJS #Patterns #BestPratices #EltonVeiga*
:mortar_board: :books:
# Estudo de padrões em NodeJS

:question: *O que:*

Projeto para estudar alguns dos padrões usando NodeJS, para desenvolvimento de aplicações, a fim de melhorar a compreensão no desenvolvimento e boas práticas, e as práticas de testes unitários automatizados.

:heavy_check_mark: *Como:*

Através da leitura de diversos artigos, e começando com padrões simples, mas importantes, e avançada a leitura e os estudos para padrões com reuso e complexos.

:x: *Não verás aqui :*

Apesar de eu entender a necessidade, meu foco aqui é apenas nos padrões e nos testes unitários. Em um mundo ideal e projeto mais complexo, abordaria estratégia de branch's e git flow. Entretanto, para esse caso, não está sendo abordado esse técnica nesse projeto.


## Resumo:

Padrões implementados com testes unitários automatizados:

- [x] Continuation Passing
- [x] Creational
- [ ] Constructor

## Getting Starting

Para rodar o projeto, você precisará ter as seguintes ferramentas (entre parenteses, as minhas versões):
- NodeJS (~14.6)
- Git (~2.28)
- Yarn (~1.22) ou NPM (~6.14)

Você pode começar clonando o repositório para sua máquina local com o comando:

> Git Clone https://github.com/AndreVeiga/padroes-em-nodejs.git

Você pode baixar as dependências com o comando (se prefere yarn):

> yarn install

Ou se prefere NPM:

> npm install

Para executar o projeto, se usar prefere usar o Yarn:

> yarn start

ou o NPM:

> npm run start

Para os testes unitários, há 3 possibilidades:

> yarn test
ou
> npm test

Para ver a coverage (coberta total em relação ao código), sendo que ele gerará um html na pasta coverage/index.html
> yarn test-report
ou
> npm test-report

E para gerar a documentação dos testes, a fim de verificação, sendo que ele gerar um arquivo html na pasta test/report/test.html
> yarn test-report-doc
ou
> test-report-doc

## Continuation Passing

Este padrão que evita fazer o código assincrono ter que esperar, ou seja, você pode fazer a função assincrona e, as invés de espera-lá, bloqueando a execução, você passa um callback e segue o fluxo. Quando sua função estiver pronta, ela executa a callback. (Conceito de Promises em JS).

## Creational

Esse padrão é muito simples de entender, mas pouco usado. Ele simplesmente se encarrega de criar os objetos. Em JS, isso é muito simples, pois a definição de objeto é mais flexivel. Entretanto, esse padrão pode ajudar, se por exemplo, ao invés de apenas criar os objetos, ele converter um objeto com as propriedade que passarem em um array. Isso gera um flexibilidade e maior usabilidade do padrão.

## Constructor

Em Javascript, um constructor é uma função responsável por implementar um objeto com atributos. Porém esses objetos não são considerados como classes igual o Java, C# e outras linguagens orientadas à objetos consideram. Apenas são construtores especiais para uma função, pois Javascript é uma linguagem orientada à protótipos. A palavra-chave new permite instanciar um objeto passando por parâmetros atributos para eles. E esses construtores armazenam em seus objetos atributos e funções que são referenciadas através da palavra-chave *this*.

## Documentações para os testes unitários:

[Mocha](https://mochajs.org/api/),
[Sinon](https://sinonjs.org/),
[Chai](https://www.chaijs.com/),
[Sinon-Chai](https://www.npmjs.com/package/sinon-chai)

## Author

Eu, [Elton Veiga](https://about.me/eltonveiga),ou precisamente, Elton André Souto Machado Veiga, sou desenvolvedor Full Stack atualmente (React, Java 8 com Spring Boot, MySql, Oracle DB e Android Nativo), andarilho nativo por algumas linguagens, simplesmente apaixonado por tecnologia, formula 1 e aviação, nerd, casado e pai de um fera incrível, resolvi criar esse repositório a fim de expor meu conhecimentos para ajudar os iniciantes.
Espero de :heart: que eu possa ajudar alguém de alguma maneira, pois nem sempre é fácil esse caminho.
