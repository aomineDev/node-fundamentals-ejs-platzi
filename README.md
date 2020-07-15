# Curso de Fundamentos de Node.js | Platzi

<div align="center" style="padding: 8px 0">
  <img src="./md/node.svg" alt="node.js" width="300">
</div>

## Index
- [Orígenes y Filosofia](#orígenes-y-filosofia)
  - [¿Qué es node.js?](#qué-es-node)
- [Características de Node.js](#características-de-node)
  - [Concurrencia](#concurrencia)
  - [Motor v8](#motor-v8)
  - [Módulos](#módulos)
  - [Orientado a eventos](#orientado-a-eventos)

## Orígenes y Filosofia

### ¿Qué es node?
Es un entorno de ejecución de javascript fuera del navegador
Nos permite ejecutarlo en cualquier lugar que nos permita ejecutar software
Se crea en 2009 y esta orientado a servidores

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

## Características de Node

### Concurrencia
Aunque sea monohilo todas sus entradas y salidas son asincronas
Un proceso por cada núcleo del procesador

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

### Motor v8
<div align="center" style="padding: 8px 0">
  <img src="./md/v8.png" alt="v8" width="300">
</div>
Corre sobre el motor V8 el cual es un entorno de ejecución de javascript
creado por google y liberado en el 2008
Convierte nuestro código JS en código maquina en lugar de interpretarlo en tiempo real linea por linea
Gracias a esto podemos detectar errores de sintaxis al momento de la compilación y no cuando se llegue a ese parte del código lo cual dota de mucha robustez a nuestro código
Esta escrito en c++ por lo que es super veloz

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

### Módulos
Todo en node funciona en base a módulos
Todo lo que no sea sintaxis del lenguaje seran modulos
los cuales son piezas de código muy pequeñas
las cuales algunas vienen por defecto y otras tendremos que ir instalandolas
o creas nuestros propios módulos

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

### Orientado a eventos
Node esta orientado a eventos
Esto nos quiere decir que hay un bucle de eventos que se ejecutan constantemente y de vez en cuando se dispararan eventos que podemos escuchar
Lo cual nos permitira programar de forma reactiva

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>