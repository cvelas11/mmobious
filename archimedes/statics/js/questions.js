
var siguiente_pregunta = "Cual es la capital de Colombia"
var radios = document.formquestions.answer;
var div_respuestas = document.getElementsByName("respuestas");

var botones = document.getElementsByName("boton");

var sig_boton = document.getElementById('siguiente')
sig_boton.disabled = true;
var preguntas = {
  1: {enunciado_p:"La base para un mural de \\(14  m^2 \\) se pinta con dos colores, la parte en azul excede en \\(2  m^2 \\) al triple de la parte en blanco. La razón entre el área blanca y el área total es:",
      respuesta_correcta:2,
      posibles_respuestas:["\\( \\frac{1}{7} \\)","\\( \\frac{3}{14} \\)","\\( \\frac{11}{14} \\)","\\( \\frac{5}{14} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  2: {enunciado_p:"Pedro deja caer una pelota que cada vez que alcanza el suelo, rebota y se eleva una altura correspondiente a una cuarta parte de la altura desde la que cae previamente. Si al tercer rebote la pelota alcanza una altura en metros de \\(15 \\over 32 \\), entonces la altura (en metros) desde la que Pedro deja caer la pelota es:",
      respuesta_correcta:4,
      posibles_respuestas:["10","18","24","30"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  3: {enunciado_p:"Cuál es elvalor de la expresión \\(2*(4*5) \\), si para dos números reales \\(a,b \\) se cumple que \\(a*b= \\frac{ab}{a-b} \\).",
      respuesta_correcta:1,
      posibles_respuestas:["\\( \\frac{1}{7} \\)","40","\\(\\frac{-20}{9} \\)","\\(\\frac{20}{9} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  4: {enunciado_p:"El número de tres dígitos \\(2a3 \\) al ser sumado con el número 326 da como resultado el número \\(5b9\\), si \\(5b9\\) es divisible entre \\(9\\). ¿Cuál es el valor de \\(a+b\\)?",
      respuesta_correcta:3,
      posibles_respuestas:["5","4","6","7"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  5: {enunciado_p:"El promedio de \\(16\\) números es \\(48\\) y el promedio de otros \\(48\\) números es \\(16\\). ¿Cuál es el promedio de los \\(64\\) números?",
      respuesta_correcta:4,
      posibles_respuestas:["25","28","32","24"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  6: {enunciado_p:"Si \\(x-y=2\\) y \\(x^2-y^2=8\\). ¿ A cuanto equivale \\(2x+6y\\)?",
      respuesta_correcta:2,
      posibles_respuestas:["5","7","2","10"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  7: {enunciado_p:"La hidra de Lerna era un monstruo de la mitología griega con la capacidad de recuperar dos cabezas por cada cabeza que le cortaran, un inexperto héroe intenta matarla, el primer día cortó la única cabeza que tenía pero los siguientes solo pudo cortar la mitad de las que había. ¿Cuántas cabezas tiene la hidra al final del octavo día?",
      respuesta_correcta:4,
      posibles_respuestas:["254","32","128","64"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  8: {enunciado_p:"Sean \\(f(x)=x^6+7x^3-8\\) y \\(g(x)=(x^2+x-2)(x^2+x+1)\\), si \\(h(x)\\) es un polinomio tal que \\(f(x)=g(x)h(x)\\). ¿Cuánto es \\( h(1) \\)?",
      respuesta_correcta:1,
      posibles_respuestas:["3","0","No se puede determinar","\\( \\frac{1}{3} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  9: {enunciado_p:"La luz y el sonido son ondas y por tanto poseen una velocidad de propagación, para el sonido \\(v_s=340 m/s\\) mientras que para la luz es cerca de \\(10^6\\) veces mayor; si el intervalo entre ver un rayo y escuchar el trueno es de \\(5 s\\). ¿A qué distancia (en metros) aproximadamente cayó el rayo?",
      respuesta_correcta:3,
      posibles_respuestas:["1500","1250","1700","1000"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  10: {enunciado_p:"Tres atletas A,B,C corren en una pista circular partiendo de un punto común P, diametralmente a P hay otro punto Q; el tiempo en minutos que tardan en dar una vuelta completa es 8,12,16 respectivamente; de lo anterior se puede afirmar que:",
      respuesta_correcta:4,
      posibles_respuestas:["Los atletas 1 y 2 se encuentran por primera vez en Q a los 24 minutos",
			   "Los atletas 1 y 2 se encuentran por primera vez en Q a los 48 minutos",
			   "Los atletas 2 y 3 se encuentran por primera vez en Q a los 48 minutos",
			   "Los atletas 1,2 y 3 nunca podrán encontrarse en un punto diferente a P"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
  11: {enunciado_p:"Martha compró un celular y en las instrucciones encontró la siguiente tabla. Su celular está descargado y debe de salir en una hora y 20 minutos. ¿Cuanta carga porcentual alcanzará aproximadamente el celular?",
      respuesta_correcta:1,
      posibles_respuestas:["67","40","60","72"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
	},
   12: {enunciado_p:"El siguiente gráfico presenta el consumo mensual de datos de un celular. ¿Cuál es la diferencia en porcentaje entre los promedios del primer y segundo trimestre?",
      respuesta_correcta:1,
      posibles_respuestas:["67","40","60","72"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
	},
  13: {enunciado_p:"Las gráficas anteriores pueden representar respectivemente:",
      respuesta_correcta:3,
      posibles_respuestas:["La cantidad de agua en un tanque llenándose y la tasa de cambio del dolar a lo largo del tiempo",
			   "La altura de una pelota que rebota al pasar el tiempo y el costo de una llamada por minuto",
			   "La distancia a casa durante un paseo y el costo de una llamada por minuto",
			   "La distancia a casa durante un paseo y la tasa de cambio del dolar a lo largo del tiempo"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
	},
  14: {enunciado_p:"Para definir las actividades del día institucional se realizó una encuesta a 200 personas, 20 votaron por hacer solamente una jornada deportiva y un concurso de baile, 35 votaron porque solo se realizara el concurso de baile y una exposición de arte, 54 de los estudiantes está de acuerdo con la jornada deportiva, de los cuales 14 también aprueban la exposición; pero de los 200, 45 solo quieren la exposición; además se sabe que 22 personas no se decidieron por ninguna opción. ¿Cuántas personas estuvieron de acuerdo con dos de las opciones?",
      respuesta_correcta:4,
      posibles_respuestas:["65","68","71","69"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
	},
  15: {enunciado_p:"La tabla muestra los resultados de una encuesta aplicada a 200 personas respecto a lo que consideran el problema más importante del país. De las afirmaciones, la única falsa es:",
      respuesta_correcta:2,
      posibles_respuestas:["El 40% de la población considera el desempleo como el mayor problema", "El 35% de la poblacion considera la corrupción como el mayor problema", "El 35% de la población considera el conflicto armado como el mayor problema", "El porcentaje relativo a hombres, que opinan que el desempleo es el mayor problema, es igual al procentaje relativo a mujeres que creen que es conflicto armado"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
	},
  16: {enunciado_p:"En la diguiente gráfica se muestra la distancia recorrida por un auto y el tiempo que le toma el recorrido. ¿Cuál fue el intervalo de tiempo en el que el auto viajó más despacio?",
      respuesta_correcta:1,
      posibles_respuestas:["[0,2]","[2,4]","[4,5]","[6,7]"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
	},
  17: {enunciado_p:"Se dispone de placas de vidrio con la propiedad de que absorben un cuarto de la luz que les incide y dejan pasar un cuarto de la misma luz. Si se disponen dos placas como lo ilustra la figura, ¿Cuánta luz pasa al lado III?",
      respuesta_correcta:2,
      posibles_respuestas:["\\( \\frac{4}{3L} \\)","\\( \\frac{1}{12L} \\)","\\( \\frac{1}{16L} \\)","\\( \\frac{5}{64L} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
	},
  18: {enunciado_p:"El resultado de la operación \\( (5 \\over 2)!-0.999...\\sqrt{\\pi} \\) es: Tenga en cuenta que \\( \\frac{1}{2} != \\sqrt{\\pi} \\over 2 \\)",
      respuesta_correcta:4,
      posibles_respuestas:["0",
			   "\\( 5 \\over 2 - \\sqrt{\\pi} \\)",
			   "\\( (25-9\\sqrt{\\pi}) \\over 10  \\)",
			   "\\( -1 \\over 16 \\sqrt{\\pi} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
	},
  19: {enunciado_p:"La gráfica de la función \\( f(x)=1-2\\sqrt{3-x \\over 4} \\) es:",
      respuesta_correcta:2,
      posibles_respuestas:["0",
			   "Incluir gráficas",
			   "Incluir gráficas",
			   "Incluir gráficas"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
    },
  20: {enunciado_p:"El crecimiento de una población de aves está dado por la función \\( P(t)=be^{-\\alpha t}+c \\), donde \\( \\alpha \\), b y c son constantes positivas diferentes. Si se deja pasar un tiempo muy grande se espera con seguridad que:",
      respuesta_correcta:3,
      posibles_respuestas:["La población alcance el valor que tenía inicialmente",
			   "La población haya crecido sin control",
			   "La población alcanzó un valor límite estable",
			   "No haya cambiado en el tiempo"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
    },
21: {enunciado_p:"Del siguiente diagrama de caja se puede inferir que:",
      respuesta_correcta:1,
      posibles_respuestas:["Hay mayor dispersión entre el 50% y el 75% de los datos",
			   "Hay un dato atípico",
			   "El promedio es cercano a 30",
			   "La máxima concentración de datos está en el primer cuartil"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
    },
22: {enunciado_p:"Un conjunto de paneles solares cuesta 5300 €, si se compran directamente a la fábrica se descuenta el 40% y sobre el nuevo precio se debe de pagar el 15% de IVA. ¿Cuál sería el costo final de los paneles al ser comprados a la fábrica?",
      respuesta_correcta:2,
      posibles_respuestas:["2915",
			   "3657",
			   "1855",
			   "4823"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
    },
23: {enunciado_p:"Si se quiere duplicar un capital en dos años y medio, ¿A qué tasa trimestral simple se debe invertir?",
      respuesta_correcta:4,
      posibles_respuestas:["3%",
			   "5%",
			   "6%",
			   "10%"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
    },
24: {enunciado_p:"En una familia hay 4 hijos, ¿Cuál es la probabilidad de que al menos dos sean mujeres?",
      respuesta_correcta:1,
      posibles_respuestas:["\\( \\frac{11}{16} \\)", "\\( \\frac{3}{8} \\)","\\( \\frac{13}{16} \\)","\\( \\frac{5}{16} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
    },
25: {enunciado_p:"La razón entre las áreas de los triángulos sombreados de la siguiente figura es:",
      respuesta_correcta:3,
      posibles_respuestas:["\\( \\frac{3}{5} \\)",
			   "\\( \\frac{1}{2} \\)",
			   "1",
			   "2"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
    },
26: {enunciado_p:"Para realizar una ventana decorativa se eligió la siguiente forma. La cantidad de cristal necesaria para cubrir la ventana es:",
      respuesta_correcta:1,
      posibles_respuestas:["(1000\\(\\pi \\)+4800)cm",
			   "(2000\\(\\pi \\)+3600)cm",
			   "(2000\\(\\pi \\)+2800)cm",
			   "(1500\\(\\pi \\)+500)cm"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
    },
27: {enunciado_p:"Una vaca está atada a una de las esquinas de un corral rectangular de 10m de largo y 5m de ancho por un lazo que mide 8m de largo; la situación se ilustra en la figura. ¿Cuál es el área máxima en la que puede pastar la vaca?:",
      respuesta_correcta:4,
      posibles_respuestas:["\\((64\\pi) m^2 \\)  ",
			   "\\((109\\pi) \\over 4 m^2 \\)  ",
			   "\\((57\\pi) m^2 \\)  ",
			   " \\((201\\pi) \\over 4 m^2 \\)  "],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
    },
28: {enunciado_p:"De las áreas sombreadas de las siguientes figuras se puede decir que:",
      respuesta_correcta:2,
      posibles_respuestas:["El área verde es mayor que el área azul",
			   "El área azul es mayor que el área verde",
			   "Ambas áreas son iguales",
			   "No se pueden comparar"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
    },
29: {enunciado_p:"Un trozo de alambre de longitud x cm es dividido en dos segmentos, uno de ellos se usa para formar un triángulo equilátero, mientras que el otro forma un aro circular. Si el área del triángulo es \\( 2\\sqrt{3}\\pi \\) veces la del círculo, ¿Cuál es la razón entre la longitud original del alambre y la longitud del segmento usado para el aro?",
      respuesta_correcta:2,
      posibles_respuestas:["\\( \\frac{1}{\\pi} \\)",
			   "4",
			   "2",
			   "\\( \\frac{1}{2} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
    },
30: {enunciado_p:"En un partido de fútbol se va a cobrar un tiro libre a 15m de la portería, la barrera es puesta a aproximadamente 10m del balón y cuando ésta salta alcanza 2m de altura; si el cobrador desea que el balón entre por la esquina inferior del arco siguiendo una trayectoria parabólica, ¿Cuál de las siguientes opciones representa la trayectoria del balón?",
      respuesta_correcta:2,
      posibles_respuestas:[" \\( y +  \\frac{45}{2}  =  \\frac{2}{5} (x- \\frac{15}{2})^2 \\)",
			   "\\( y- \\frac{45}{2} =  \\frac{-2}{5}(x- \\frac{15}{2})^2 \\)",
			   "\\( y + 225=4(x-\\frac{15}{2})^2 \\)",
			   "\\( y - 225=-4(x-\\frac{15}{2})^2\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
31: {enunciado_p:"Vista desde arriba una pista de atletismo tiene forma de elipse, la cual puede ser descrita por la ecuación: \\( 4x^2+9y^2-48x+72y+144=0 \\) Dónde las distancias representadas por x y y se miden en Hm; ¿Cuántas vueltas aproximadamente debe de dar un atleta para recorrer una distancia de 1000m? Tenga en mente que para el perímetro P de una elipse \\( P \\approx 2 \\pi \\sqrt{(a^2+b^2) \\over 2} \\) donde a,b son la medida de los semiejes de la elipse.",
      respuesta_correcta:4,
      posibles_respuestas:["1",
			   "2",
			   "3",
			   "4"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
32: {enunciado_p:"¿Cuál es el valor de k para el que la recta \\( x+y+k=0 \\) es tangente a la circunferencia \\( x^2+y^2+6x+2y+6=0 \\)?",
      respuesta_correcta:2,
      posibles_respuestas:["1/2",
			   " \\( 4 - 2 \\sqrt{2} \\)",
			   " \\( -4 + 2 \\sqrt{2} \\)",
			   " \\( 1 - \\sqrt{2} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
33: {enunciado_p:"Se tienen las siguientes ecuaciones: I. \\( 4x^2-4xy+y^2-6x+3y+2=0 \\) II.\\( 2x^2+3y^2-4x+12y-20=0 \\) III.\\( 3x^2+3y^2-4x+2y+6=0 \\) Las ecuaciones que representan cónicas degeneradas son:",
      respuesta_correcta:3,
      posibles_respuestas:["I y II",
			   "II y III",
			   " I y III",
			   "I, II y III"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
34: {enunciado_p:"Dos radiofaros están fijos y separados 8 Km, un barco se mueve de manera que la diferencia entre las distancias del mismo a cada radiofaro es constante. En un instante se supo que, respecto al punto medio entre ambos radiofaros, la posición del barco era (5 Km, 3\\( \\sqrt{7} \\) Km); si ahora se sabe que bajo la misma trayectoria ha viajado 1 Km en la dirección paralela al segmento que une los radiofaros, ¿Cuál es la coordenada y de su actual posición?",
      respuesta_correcta:4,
      posibles_respuestas:["\\( \\sqrt{3} \\)",
			   "2",
			   "2\\( \\sqrt{6} \\)",
			   "6"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
35: {enunciado_p:"La secuencia mostrada en la imagen se forma usando cuadrados iguales, el número de cuadrados usados para el paso 16 es:",
      respuesta_correcta:2,
      posibles_respuestas:["45",
			   "47",
			   "48",
			   "49"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
36: {enunciado_p:"Un cubo pintado de rojo es dividido en 27 cubitos pequeños de igual volumen. ¿Cuántos de los cubitos tienen pintadas al menos dos caras?",
      respuesta_correcta:3,
      posibles_respuestas:["18",
			   "19",
			   "20",
			   "21"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
37: {enunciado_p:"Durante la fotosíntesis las plantas absorben dióxido de carbono ( \\( CO_2 \\) ) y con ayuda de luz solar producen glucosa ( \\(C_6 H_12 O_6 \\) ) y oxígeno ( \\(O_2 \\) ), cómo lo indica la siguiente ecuación no balanceada: \\( CO_2 + H_2O \\longrightarrow C_6 H_12 O_6 + O_2 \\). Si la molécula de glucosa pesa alrededor de seis veces más que la de oxígeno, ¿Cerca de cuántos Kg de oxígeno produce un árbol por cada Kg de glucosa?",
      respuesta_correcta:1,
      posibles_respuestas:["1 Kg de oxígeno por cada Kg de glucosa",
			   "6 Kg de oxígeno por cada Kg de glucosa",
			   "1/6 Kg de oxígeno por cada Kg de glucosa",
			   "1/12 Kg de oxígeno por cada Kg de glucosa"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
38: {enunciado_p:"En la siguiente suma A y B representan dígitos, ¿Cuál es el valor de A-B?",
      respuesta_correcta:3,
      posibles_respuestas:["1",
			   "5",
			   "4",
			   "9"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
39: {enunciado_p:"De un grupo de cinco amigos se sabe que: // - Ana es más alta que Carla. // - Érica es más grande que Carla. // - Daniel es más pequeño que Érica, pero más alto que Beatriz. ¿Quién es el más bajo?",
      respuesta_correcta:2,
      posibles_respuestas:["Ana",
			   "Beatriz",
			   "Carla",
			   "Daniel"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
40: {enunciado_p:"En una bolsa se tienen bolas de diferentes colores: 5 verdes, 6 Rojas y 4 negras; un juego consiste en sacar bolas de una en una hasta obtener una bola roja y una verde. ¿Cuál debe ser el número mínimo de bolas que se deben sacar para tener certeza de que se va a ganar?",
      respuesta_correcta:4,
      posibles_respuestas:["2",
			   "6",
			   "9",
			   "10"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
41: {enunciado_p:"Se tienen los siguientes eventos: I. Lanzar tres dados y obtener 5 o 6. II. Lanzar dos dados y obtener 4,5 o 6. Respecto a las probabilidades de ambos eventos se puede decir que:",
      respuesta_correcta:4,
      posibles_respuestas:["2",
			   "6",
			   "9",
			   "10"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    }
}


contador = 1;


 var enunciado = document.getElementById("enunciado_p");



console.log(enunciado);

var respuesta_1 = document.getElementById("respuesta_1_label");
var respuesta_2 = document.getElementById("respuesta_2_label");
var respuesta_3 = document.getElementById("respuesta_3_label");
var respuesta_4 = document.getElementById("respuesta_4_label");
var video = document.getElementById("video_solucion");

enunciado.innerHTML = preguntas[contador.toString()]['enunciado_p'];
respuesta_1.innerHTML = preguntas[contador.toString()]['posibles_respuestas'][0];
respuesta_2.innerHTML = preguntas[contador.toString()]['posibles_respuestas'][1];
respuesta_3.innerHTML = preguntas[contador.toString()]['posibles_respuestas'][2];
respuesta_4.innerHTML  = preguntas[contador.toString()]['posibles_respuestas'][3];
video.src  = preguntas[contador.toString()]['video'];
video.style.display = "none";

console.log(preguntas[contador.toString()]['posibles_respuestas'][0]);
var numero_preguntas = Object.keys(preguntas).length

console.log(enunciado.textContent);
console.log(numero_preguntas);


function clearcolors(event){
  var button_checked = document.getElementById($('input[name=answer]:checked', '#questions_form').val());
  button_checked.style.backgroundColor = document.getElementById("jumbo_questions").style.backgroundColor;
  var container_green = document.getElementById("answer"+ preguntas[contador.toString()]['respuesta_correcta'].toString() + "_container")
  container_green.style.backgroundColor = document.getElementById("jumbo_questions").style.backgroundColor;
}

function clearbuttons(event){
  for (var i=0, iLen=radios.length; i<iLen; i++) {
    radios[i].checked = false;
  }
}

$("#siguiente").click(function(event){

    for (var i=0, iLen=radios.length; i<iLen; i++) {
      radios[i].disabled = false;
    }
    video.style.display = "none";

    clearcolors()
    clearbuttons()
    contador = contador + 1
    console.log(contador);

    if(contador <= numero_preguntas){
      enunciado.innerHTML = preguntas[contador.toString()]['enunciado_p']
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"enunciado_p"]);

      respuesta_1.innerHTML = preguntas[contador.toString()]['posibles_respuestas'][0];
      respuesta_2.innerHTML = preguntas[contador.toString()]['posibles_respuestas'][1];
      respuesta_3.innerHTML = preguntas[contador.toString()]['posibles_respuestas'][2];
      respuesta_4.innerHTML = preguntas[contador.toString()]['posibles_respuestas'][3];
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"respuesta_1_label"]);
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"respuesta_2_label"]);
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"respuesta_3_label"]);
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"respuesta_4_label"]);

      video.src  = preguntas[contador.toString()]['video'];
      video.disabled = true;
      console.log(preguntas[contador.toString()]['posibles_respuestas'][0]);
      console.log(enunciado.textContent);
      console.log(numero_preguntas);
    }else{
      enunciado.textContent = 'Gracias!';
      for (var i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].style.display = "none";
      }
      for (var i=0, iLen=div_respuestas.length; i<iLen; i++) {
        div_respuestas[i].style.display = "none";
      }
      for (var i=0, iLen=botones.length; i<iLen; i++) {
        botones[i].style.display = "none";
      }
    }
    sig_boton.disabled = true;

});

$("#verificar").click(function(event){
  var button_checked = document.getElementById($('input[name=answer]:checked', '#questions_form').val());
  //console.log(button_checked);
  video.style.display = "inline-block";

  if (button_checked === null){
    alert('Por favor seleccione una respuesta')
  }else{
    clearcolors()
    //var container_green = document.getElementById("answer"+ preguntas[contador.toString()]['respuesta_correcta'].toString() + "_container")
    //container_green.style.backgroundColor = '#00b700';
    var respuesta_correcta = document.getElementById("respuesta_" + preguntas[contador.toString()]['respuesta_correcta'].toString() + "_label");

    respuesta_correcta.innerHTML = respuesta_correcta.innerHTML +  " &#9989;";
    if($("#respuesta_" + preguntas[contador.toString()]['respuesta_correcta'].toString()).is(":checked")){

    }else{
      console.log("wrong");
      var button_checked = document.getElementById($('input[name=answer]:checked', '#questions_form').val());
      button_checked.getElementsByTagName("label")[0].innerHTML = button_checked.getElementsByTagName("label")[0].innerHTML  + "	&#10060;"
    }
    for (var i=0, iLen=radios.length; i<iLen; i++) {
      radios[i].disabled = true;
    }
    sig_boton.disabled = false;
  }
});
