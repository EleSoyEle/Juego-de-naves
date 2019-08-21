/* 
------Descripcion------
Este es un pequeño juego de naves que hice 
al estilo de los juegos de antes...
Cabe decir que ya que usa imagenes que no tengo permiso de usar para el publico 
sin recibir una reclamacion de copyright por eso prevenir no usar en un seridor publico

Codigo hecho por: Angel Valenzuela

------Funcionamiento------
Primero carga el fondo aqui el url de donde lo saque: https://www.google.com/search?q=fondos+de+estrellas+animadas&rlz=1C1SQJL_esMX829MX829&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi9677j2ZLkAhVS5awKHRM1BdQQ_AUIESgB&biw=1366&bih=657#imgrc=JLGPH8JVWKcwXM:

Luego carga la nave aqui el url: https://www.google.com/search?rlz=1C1SQJL_esMX829MX829&biw=1366&bih=657&tbm=isch&sa=1&ei=vE5cXfK8ENG8tQWbgbngCA&q=naves+animadas+png&oq=naves+ani&gs_l=img.3.1.0l2j0i5i30j0i8i30l7.97378.101622..103006...5.0..0.370.2284.0j6j3j2......0....1..gws-wiz-img.......35i39j0i67j0i30j0i24j0i10i24.gbu38wKAobY#imgrc=y1Plq_zrMovhmM:

Luego carga el asteroide aqui el url: https://www.google.com/search?rlz=1C1SQJL_esMX829MX829&tbm=isch&q=asteroides+animados&chips=q:asteroides+animados,g_1:espacio&sa=X&ved=0ahUKEwjK7bfRnJLkAhVP1qwKHVv1DJ4Q4lYILCgC&biw=1366&bih=608&dpr=1#imgdii=9xaqRCeIwxy4xM:&imgrc=g2KO8vkWXNOpVM:

Luego carga el contador

Cada vez que el asteroide llega al valor 500 en x se le asigna 1 al contador y los valores de x
en el asteroide sele asigna 0 y el y se vuelve a tomar de la funcion aleatoria 
 
El codigo repite un bucle el cual nunca se detendra a menos de que pierdas o de que la variable "game_over" este en true

------Creditos------
Fondo: https://www.google.com/search?q=fondos+de+estrellas+animadas&rlz=1C1SQJL_esMX829MX829&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi9677j2ZLkAhVS5awKHRM1BdQQ_AUIESgB&biw=1366&bih=657#imgrc=JLGPH8JVWKcwXM:
Nave:  https://www.google.com/search?rlz=1C1SQJL_esMX829MX829&biw=1366&bih=657&tbm=isch&sa=1&ei=vE5cXfK8ENG8tQWbgbngCA&q=naves+animadas+png&oq=naves+ani&gs_l=img.3.1.0l2j0i5i30j0i8i30l7.97378.101622..103006...5.0..0.370.2284.0j6j3j2......0....1..gws-wiz-img.......35i39j0i67j0i30j0i24j0i10i24.gbu38wKAobY#imgrc=y1Plq_zrMovhmM:
Asteroide: https://www.google.com/search?rlz=1C1SQJL_esMX829MX829&tbm=isch&q=asteroides+animados&chips=q:asteroides+animados,g_1:espacio&sa=X&ved=0ahUKEwjK7bfRnJLkAhVP1qwKHVv1DJ4Q4lYILCgC&biw=1366&bih=608&dpr=1#imgdii=9xaqRCeIwxy4xM:&imgrc=g2KO8vkWXNOpVM:


*/

//     -----Variables etc...-----
document.addEventListener("keydown" , detectar);
//Estas variables sirven para la medicion de puntos
var puntuacion = 0;
var puntuacion_maxima = 0;
var intento1 = false;
//Esta variable sera donde se tendra la etiqueta div que dira la puntuacion maxima
var caja_puntuacion = document.getElementById("caja_puntuacion");
//Para obtener el canvas y declarar su contexto
var cv = document.getElementById("canvas1");
var ctx = cv.getContext("2d");
//Variables de posicion
var posiscion_x = 185;
const posiscion_y = 400;
var espacio = 5;//Esta variable es la distancia de movimiento

var caida_x = 0;
var caida_y = 0;

var nave_generada = false;
var dificultad = 2;

var game_over = false;//Dira si perdistes o no

var juego = false;


//Variables para cargar las imagenes
var nave = {
	url:"Nave_espacial.png"
}
nave.imagen = new Image();
nave.imagen.src = nave.url;

var asteroide = {
	url:"Asteroide .png"
}
asteroide.imagen = new Image();
asteroide.imagen.src = asteroide.url;

var fondo = {
	url:"Fondo.png"
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;

function detectar(evento){//Esta funcion detectara las tecla y asingara algunos valores
if(evento.keyCode == 37){
	posiscion_x = posiscion_x - espacio * 2;
	if(posiscion_x < 0){
		posiscion_x = 0;
	}
	
}
if(evento.keyCode == 39){
	posiscion_x = posiscion_x + espacio * 2;
	if(posiscion_x > 370){
		posiscion_x = 370;
	}
}
if(game_over == true){
	if(evento.keyCode == 32){
		ctx.clearRect(0,0,cv.width,cv.height);
		caida_y = 0;
		game_over = false;
		
	}
}
if(juego == false && evento.keyCode == 32){
	juego = true;
	def();

}
}

//Esta funcion dibujara la nave y asteroides en su respectiva posicion
//Perdon por escribir mal el nombre de la variable posicsion en lugar de posicion 
function dibujar(){
	if(nave_generada == false){
		caida_x = aleatorio(25,475);
	}
	ctx.clearRect(0,0,cv.width,cv.height);
	//Esto dibuja el contador de puntos
	nave.imagen.addEventListener("load", dibujar);
	dibujar_texto("Esta es tu puntuacion: ",150,25,2);
	dibujar_texto(puntuacion,400,55,1);

	//Esto dibuja la nave en el canvas
	ctx.drawImage(nave.imagen,posiscion_x,posiscion_y,130,75);
	nave_generada = true;
	//Esto dibuja el meteorito
	asteroide.imagen.addEventListener("load", dibujar);
	ctx.drawImage(asteroide.imagen,caida_x,caida_y,75,75);
	if(caida_y == 500){
		caida_y = 0;
		nave_generada = false;
		puntuacion = puntuacion + 1;
		if(puntuacion > puntuacion_maxima){
			puntuacion_maxima = puntuacion;
		}
		caja_puntuacion.innerHTML = "Tu puntuacion maxima es: "+ puntuacion_maxima;

	}
	if(caida_y == 500 && intento1 == false){
		caida_y = 0;
		nave_generada = false;
		puntuacion = puntuacion + 1;
		puntuacion_maxima = puntuacion;
		caja_puntuacion.innerHTML = "Tu puntuacion maxima es: " + puntuacion_maxima;
	}

}
/*Esta funcion sera en la que se reproducira la funcion dibujar y donde se detectara
cuando se pierde  y donde saldra el mensaje de game over*/
function loop(){
	if(caida_x >= posiscion_x - 30 && caida_x <= posiscion_x + 90 && caida_y >= 350){
		game_over = true;
	}
	if(game_over == false){
	dibujar();
	caida_y = caida_y + espacio/4;
}
	else if(game_over == true){
		dibujar_texto("Perdiste", 150,225, 1);
		dibujar_texto("Presiona espacio para reintentar", 105,275,2);
		puntuacion = 0;
	}
}
function aleatorio(min,max){//Una funcion aleatoria
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function dibujar_texto(texto,x,y,tamaño){
	if(tamaño == 1){
		ctx.fillStyle = "#83D0FF"
		ctx.font="bold 55px cursive";
		ctx.fillText(texto,x,y);
}
	if(tamaño == 2){
		ctx.fillStyle = "#ABDAF7"
		ctx.font="bold 20px cursive";
		ctx.fillText(texto,x,y);
	}
}
//Este es el loop infinito
function def(){


if(juego == true){
window.setInterval("loop()", aleatorio(1,5));
}
else{
	dibujar_texto("Space ship", 100,225,1);
	dibujar_texto("Presiona espacio para jugar",105,275,2);

}
}
def();
