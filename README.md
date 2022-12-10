
<p align="center">
  <img src="./giphy.gif" alt="gif sunny day" width="200px" height="200px">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-16.10.0-blue" alt="Node.js">
</p>

<h1 align="center">Hello Weather ☁️</h1>

## Sumário

- [Sumário](#sumário)
- [Sobre o projeto](#sobre-o-projeto)
- [Ações implementadas](#ações-implementadas)
- [Instruções para iniciar o projeto](#instruções-para-iniciar-o-projeto)
- [Tech Stack](#tech-stack)
- [Problema](#problema)
- [Implementações e melhorias futuras](impletacoes-e-melhorias-futuras)


## Sobre o projeto

<p align="justify">Criado para alertar as pessoas de forma rápida e prática sobre possíveis fenômenos meteorológicos e desastres naturais.
  
## Ações implementadas 
  
**A pessoa usuária pode:**  
- [X] Adicionar o nome de alguma cidade.
E o Hello Weather retornará se há alerta naquela região.


</p>

## Instruções para iniciar o projeto
1) Clone o Projeto
2) Abra o Hello Weather no editor de sua preferência
3) ``npm install``
4) ``npm run start `` para iniciar o Hello Weather.
5) ``npm run test `` para rodar todos os testes.
6) ``npm test -- --coverage`` para verificar a cobertura de testes.

## Tech Stack
- Api [Weather - Microsoft](https://learn.microsoft.com/pt-br/rest/api/maps/weather/get-severe-weather-alerts?tabs=HTTP)
- Api [Geocoding - Google](https://developers.google.com/maps/documentation/javascript/geocoding)
- Node 16.10.0
- Jest
- Dotenv
- node-fetch
- prompt-sync
- translate


## Problema

No ano de 2022 cerca de 7.918.922 pessoas foram afetadas por desastres naturais (chuva, seca, rompimento/colapso de barragens e derramamento de produtos químicos em ambiente lacustre, fluvial e marinho).
Com o passar dos anos, os fenômenos climáticos estão ficando cada vez mais severos e o impacto consequentemente aumenta, deixando pessoas desalojadas e/ou com os serviços essenciais atingidos, afetando diretamente o bem estar da população. O prejuízo chegou a 72.378.701.638. A população nem sempre têm acesso a esse tipo de informação, o que prejudica a tomada de decisão, compreensão e implementação de medidas protetivas, desempenhando um papel central na forma de análise, compreensão, tomada de decisão e implementação de medidas preventivas. 
##### Fonte: [Observatório de Desastres Naturais](https://desastres.cnm.org.br/)




## Implementações futuras e melhorias
- Ter uma api própria. 
- Aumentar cobertura de testes.
- Refatorar e usar mais single responsibility principle (desacoplar funções)
