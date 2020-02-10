
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
      categoría:"A",
	},
2: {enunciado_p:"Pedro deja caer una pelota que cada vez que alcanza el suelo, rebota y se eleva una altura correspondiente a una cuarta parte de la altura desde la que cae previamente. Si al tercer rebote la pelota alcanza una altura en metros de \\( \\frac{15}{32} \\), entonces la altura (en metros) desde la que Pedro deja caer la pelota es:",
      respuesta_correcta:4,
      posibles_respuestas:["10","18","24","30"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
3: {enunciado_p:"Cuál es el valor de la expresión \\(2*(4*5) \\), si para dos números reales \\(a,b \\) se cumple que \\(a*b= \\frac{ab}{a-b} \\).",
      respuesta_correcta:1,
      posibles_respuestas:["\\( \\frac{1}{7} \\)","\\( 40 \\)","\\(\\frac{-20}{9} \\)","\\(\\frac{20}{9} \\)"],
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
10: {enunciado_p:"Tres atletas A,B,C corren en una pista circular partiendo de un punto común \\(P\\), diametralmente a \\(P\\) hay otro punto \\(Q\\); el tiempo en minutos que tardan en dar una vuelta completa es \\(8,12,16\\) respectivamente; de lo anterior se puede afirmar que:",
      respuesta_correcta:4,
      posibles_respuestas:["Los atletas A y B se encuentran por primera vez en Q a los 24 minutos",
			   "Los atletas A y B se encuentran por primera vez en Q a los 48 minutos",
			   "Los atletas B y C se encuentran por primera vez en Qa los 48 minutos",
			   "Los atletas A, B y C nunca podrán encontrarse en un punto diferente a P"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
	},
11: {enunciado_p:"En la recta se disponen números consecutivos de la siguiente manera, si \\( \\frac{f}{a}=2 \\) ¿Cuál es el calor de \\( f \\cdot a\\)?",
      respuesta_correcta:4,
      posibles_respuestas:["18","29","36","50"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"A"
      ,grafica:"../statics/images/pregunta11.svg"
	},
12: {enunciado_p:"Martha compró un celular y en las instrucciones encontró la siguiente tabla. Su celular está descargado y debe de salir en una hora y 20 minutos. ¿Cuanta carga porcentual alcanzará aproximadamente el celular?",
      respuesta_correcta:1,
      posibles_respuestas:["67","40","60","72"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
      ,grafica:"../statics/images/pregunta12.svg"

	},
13: {enunciado_p:"El siguiente gráfico presenta el consumo mensual de datos de un celular. El consumo de dos meses representó el 40% del consumo total en el semestre, ¿Cuáles fueron esos meses?",
      respuesta_correcta:2,
      posibles_respuestas:["Mayo y Agosto","Junio y Octubre","Julio y Septiembre","Mayo y Junio"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
      ,grafica:"../statics/images/pregunta13.svg"

	},
14: {enunciado_p:"Las gráficas anteriores pueden representar respectivemente:",
      respuesta_correcta:3,
      posibles_respuestas:["La cantidad de agua en un tanque llenándose y la tasa de cambio del dolar a lo largo del tiempo",
			   "La altura de una pelota que rebota al pasar el tiempo y el costo de una llamada por minuto",
			   "La distancia a casa durante un paseo y el costo de una llamada por minuto",
			   "La distancia a casa durante un paseo y la tasa de cambio del dolar a lo largo del tiempo"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
      ,grafica:"../statics/images/pregunta14.svg"

	},
15: {enunciado_p:"Para definir las actividades del día institucional se realizó una encuesta a 200 personas, 20 votaron por hacer solamente una jornada deportiva y un concurso de baile, 35 votaron porque solo se realizara el concurso de baile y una exposición de arte, 54 de los estudiantes está de acuerdo con la jornada deportiva, de los cuales 14 también aprueban la exposición; pero de los 200, 45solo quieren la exposición; además se sabe que 22 personas no se decidieron por ninguna opción. ¿Cuántas personas estuvieron de acuerdo con dos de las opciones?",
      respuesta_correcta:4,
      posibles_respuestas:["65","68","71","69"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
	},
16: {enunciado_p:"La tabla muestra los resultados de una encuesta aplicada a 200 personas respecto a lo que consideran el problema más importante del país. De las afirmaciones, la única falsa es:",
      respuesta_correcta:2,
      posibles_respuestas:["El 40% de la población considera el desempleo como el mayor problema", "El 35% de la poblacion considera la corrupción como el mayor problema","El porcentaje relativo a hombres, que opinan que el desempleo es el mayor problema, es igual al procentaje relativo a mujeres que creen que es conflicto armado" ,"El 35% de la población considera el conflicto armado como el mayor problema"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
	},
17: {enunciado_p:"Dos materiales, representados como un círculo y un cuadrado, presentan las características mostradas a continuación. De ésto se puede concluir que:",
      respuesta_correcta:3,
      posibles_respuestas:["A menor masa, menor densidad y por tanto mayor temperatura",
                                             "A menor masa, mayor densidad y por tanto menor temperatura",
                                             "A mayor masa, mayor densidad y por tanto menor temperatura",
                                             "A mayor masa, menor densidad y por tanto mayor temperatura"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
      ,grafica:"../statics/images/pregunta17.svg"

	},
18: {enunciado_p:"Las ventas de un concesionario se resumen en la tabla, en un diagrama circular, el porcentaje que representan los modelos \\( 2,3\\) y \\(4\\) son:",
      respuesta_correcta:1,
      posibles_respuestas:["7,25,24 respectivamente","10,22,20 respectivamente","7,16,15 respectivamente","12,7,37 respectivamente"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"AG"
      ,grafica:"../statics/images/pregunta18.svg"

	},
19: {enunciado_p:"En la siguiente gráfica se muestra la distancia recorrida por un auto y el tiempo que le toma el recorrido. ¿Cuál fue el intervalo de tiempo en el que el auto viajó más despacio?",
      respuesta_correcta:1,
      posibles_respuestas:["[0,2]","[2,4]","[4,5]","[6,7]"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
      ,grafica:"../statics/images/pregunta19.svg"

	},
20: {enunciado_p:"Se dispone de placas de vidrio con la propiedad de que absorben un cuarto de la luz que les incide, dejan pasar un cuarto de la misma luz y reflejan el resto. Si se disponen dos placas como lo ilustra la figura, ¿Cuánta luz pasa al lado III?",
      respuesta_correcta:2,
      posibles_respuestas:["\\( \\frac{4}{3}L \\)","\\( \\frac{1}{12}L \\)","\\( \\frac{1}{16}L \\)","\\( \\frac{5}{64}L \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
      ,grafica:"../statics/images/pregunta20.svg"

	},
21: {enunciado_p:"El resultado de la operación \\( (\\frac{5}{2})!-0.\\bar{9}\\sqrt{\\pi} \\) es: Tenga en cuenta que \\( (\\frac{1}{2}) != \\frac{\\sqrt{\\pi}}{2} \\)",
      respuesta_correcta:4,
      posibles_respuestas:["0",
			   "\\( \\frac{5}{2} - \\sqrt{\\pi} \\)",
			   "\\( \\frac{25-9\\sqrt{\\pi}}{10}  \\)",
			   "\\( \\frac{-1}{16} \\sqrt{\\pi} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
	},
22: {enunciado_p:"La gráfica de la función \\( f(x)=1-2\\sqrt{3- \\frac{x}{4}} \\) es:",
      respuesta_correcta:2,
      posibles_respuestas:["0",
			   "Incluir gráficas",
			   "Incluir gráficas",
			   "Incluir gráficas"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
    },
23: {enunciado_p:"El crecimiento de una población de aves está dado por la función \\( P(t)=be^{-\\alpha t}+c \\), donde \\( \\alpha \\), \\(b\\) y \\(c\\) son constantes positivas diferentes. Si se deja pasar un tiempo muy grande se espera con seguridad que:",
      respuesta_correcta:3,
      posibles_respuestas:["La población alcance el valor que tenía inicialmente",
			   "La población haya crecido sin control",
			   "La población alcanzó un valor límite estable",
			   "No haya cambiado en el tiempo"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
    },
24: {enunciado_p:"Dos funciones \\(g(x)\\) y \\(h(x)\\) son tales que \\(g(-1)=0\\) y \\(h(x)=\\sqrt{2x+6}\\), se define la función \\(f(x)=\\frac{h}{g}\\); un posible dominio de la función \\(f\\) es:",
      respuesta_correcta:1,
      posibles_respuestas:["\\([-3,-1) \\cup (-1,\\infty)\\)","\\((-\\infty,\\infty)\\)","\\( \\mathbb{R} \\smallsetminus \\lbrace -1 \\rbrace \\)","\\(-1\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
	},
25: {enunciado_p:"Si sobre el intervalo  [0,2]  una función cumple que el área entre esta y el eje \\(x\\) es igual a \\(1\\) la función puede llamarse una función de probabilidad. De las siguientes funciones, la que no satisface la definición anterior es:",
      respuesta_correcta:4,
      posibles_respuestas:["\\( f(x)=\\frac{1}{2}\\)","\\(f(x)=-\\frac{x}{2}+1\\)","\\( f(x)=\\begin{cases}\\frac{2}{3}x & 0 \\leq x \\leq 1 \\\\frac{2}{3} & x \\geq 1 \end{cases} \\)","\\( f(x)=\\sqrt{2x}\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
	},
26: {enunciado_p:"La gráfica de \\(f(x)\\) y \\(g(x)\\) se muestra a continuación, ¿Cuál de las opciones es una posible gráfica de \\(f+g\\)?",
      respuesta_correcta:3,
      posibles_respuestas:["faltan graficas","\\((-\\infty,\\infty)\\)","\\( \\mathbb{R} \\smallsetminus \\lbrace -1 \\rbrace \\)","\\(-1\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"C"
	},
27: {enunciado_p:"Del siguiente diagrama de caja se puede inferir que:",
      respuesta_correcta:1,
      posibles_respuestas:["Hay mayor dispersión entre el 50% y el 75% de los datos",
			   "Hay un dato atípico",
			   "El promedio es cercano a 30",
			   "La máxima concentración de datos está en el primer cuartil"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
      ,grafica:"../statics/images/pregunta27.svg"

    },
28: {enunciado_p:"Un conjunto de paneles solares cuesta 5300 €, si se compran directamente a la fábrica se descuenta el 40% y sobre el nuevo precio se debe de pagar el 15% de IVA. ¿Cuál sería el costo final de los paneles al ser comprados a la fábrica?",
      respuesta_correcta:2,
      posibles_respuestas:["2915€",
			   "3657€",
			   "1855€",
			   "4823€"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
    },
29: {enunciado_p:"Si se quiere duplicar un capital en dos años y medio, ¿A qué tasa trimestral simple se debe invertir?",
      respuesta_correcta:4,
      posibles_respuestas:["3%",
			   "5%",
			   "6%",
			   "10%"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
    },
30: {enunciado_p:"En una familia hay 4 hijos, ¿Cuál es la probabilidad de que al menos dos sean mujeres?",
      respuesta_correcta:1,
      posibles_respuestas:["\\( \\frac{11}{16} \\)", "\\( \\frac{3}{8} \\)","\\( \\frac{13}{16} \\)","\\( \\frac{5}{16} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
    },
31: {enunciado_p:"En un almacen se compraron cantidades distintas de celulares de diferentes marcas como lo muestra la tabla. El precio promedio de un celular en el almacen es de:",
      respuesta_correcta:1,
      posibles_respuestas:["360$",
			   "440$",
			   "117$",
			   "400$"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
      ,grafica:"../statics/images/pregunta31.svg"

    },
32: {enunciado_p:"La construcción de un edificio se realiza en tres etapas: los primeros 40 pisos a razón de ocho pisos por mes, los siguientes 20pisos a razón de cinco por mes, y los últimos 18 a razón de seis por mes; si la eficiencia de una etapa es igual al número de pisos construidos respecto al número de meses empleados, ¿Cuál es la eficiencia media de toda la construcción?",
      respuesta_correcta:4,
      posibles_respuestas:["4 pisos por mes","6 pisos por mes","\\(6.\\bar{3} \\) pisos por mes","\\(6.5\\) pisos por mes"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
	},
33: {enunciado_p:"El tercer cuartil de una muestra representa la agrupación de:",
      respuesta_correcta:2,
      posibles_respuestas:["El 100% de los datos de la muestra.","El 75% de los datos de la muestra.","El 50% de los datos de la muestra.","El 25% de los datos de la muestra."],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"E"
	},
34: {enunciado_p:"La razón entre las áreas de los triángulos sombreados de la siguiente figura es:",
      respuesta_correcta:3,
      posibles_respuestas:["\\( \\frac{3}{5} \\)",
			   "\\( \\frac{1}{2} \\)",
			   "1",
			   "2"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
      ,grafica:"../statics/images/pregunta34.svg"

    },
35: {enunciado_p:"Para realizar una ventana decorativa se eligió la siguiente forma. La cantidad de cristal necesaria para cubrir la ventana es:",
      respuesta_correcta:1,
      posibles_respuestas:["\\(1000\\pi +4800\\)cm",
			   "\\(2000\\pi +3600\\)cm",
			   "\\(2000\\pi +2800\\)cm",
			   "\\(1500\\pi +500\\)cm"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
      ,grafica:"../statics/images/pregunta35.svg"

    },
36: {enunciado_p:"Una vaca está atada a una de las esquinas de un corral rectangular de \\(10\\)m de largo y \\(5\\)m de ancho por un lazo que mide \\(8\\)m de largo; la situación se ilustra en la figura. ¿Cuál es el área máxima en la que puede pastar la vaca?:",
      respuesta_correcta:4,
      posibles_respuestas:["\\((64\\pi) m^2 \\)  ","\\(\\frac{109\\pi}{4} m^2 \\)  ","\\((57\\pi) m^2 \\)  "," \\(\\frac{201\\pi}{4} m^2 \\)  "],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
      ,grafica:"../statics/images/pregunta36.svg"

    },
37: {enunciado_p:"Las siguientes figuras se construyeron a partir de triángulos equiláteros, de las regiones azul y verde se puede decir que:",
      respuesta_correcta:2,
      posibles_respuestas:["El área verde es mayor que el área azul",
			   "El área azul es mayor que el área verde",
			   "Ambas áreas son iguales",
			   "No se pueden comparar"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
      ,grafica:"../statics/images/pregunta37.svg"

    },
38: {enunciado_p:"Un trozo de alambre de longitud \\(x\\) cm es dividido en dos segmentos, uno de ellos se usa para formar un triángulo equilátero, mientras que el otro forma un aro circular. Si el área del triángulo es \\( 2\\sqrt{3}\\pi \\) veces la del círculo, ¿Cuál es la razón entre la longitud original del alambre y la longitud del segmento usado para el aro?",
      respuesta_correcta:2,
      posibles_respuestas:["\\( \\frac{1}{\\pi} \\)","4","2",
			   "\\( \\frac{1}{2} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
    },
39: {enunciado_p:"La red de una cesta de baloncesto tiene forma de cilindro vertical sin las tapas superior e inferior, el diámetro de la cesta debe de ser \\(2\\) cm mayor que el del balón, cuyo radio es de \\(24\\) cm; ¿Cuál debería ser el área mínima de la red?",
      respuesta_correcta:3,
      posibles_respuestas:["\\(3650 \\pi cm^2\\)","\\(3456 \\pi cm^2\\)","\\(2400 \\pi cm^2 \\) ","\\(2304 \\pi cm^2\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
	},
40: {enunciado_p:"Si todos los ángulos son rectos, el perímetro de la figura es:",
      respuesta_correcta:1,
      posibles_respuestas:["46 cm","48 cm","51 cm","54 cm"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
      ,grafica:"../statics/images/pregunta40.svg"

	},
41: {enunciado_p:"Andrés compra un pececito y lo introduce en un recipiente de forma cilíndrica de base \\(100 cm^2\\) y lleno de agua hasta cierto punto, si el nivel de agua sube \\(3 cm\\), ¿Cuál es el peso del pez si se sabe que cada \\(cm^3\\) de líquido equivale a \\(0.5 g\\)?",
      respuesta_correcta:1,
      posibles_respuestas:["150 g","300 g","500 g","1500 g"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
	},
42: {enunciado_p:"La cruz de la figura está formada por cinco cuadrados iguales y el área del triángulo sombreado es \\(48 cm^2\\). ¿Cuál es el área de la cruz?",
      respuesta_correcta:3,
      posibles_respuestas:["\\(80 cm^2\\)","\\((100 cm^2\\)","\\(160 cm^2\\)","\\(320 cm^2\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"G"
      ,grafica:"../statics/images/pregunta42.svg"

	},
43: {enunciado_p:"En un partido de fútbol se va a cobrar un tiro libre a \\(15\\)m de la portería, la barrera es puesta a aproximadamente \\(10\\)m del balón y cuando ésta salta alcanza \\(2\\)m de altura; si el cobrador desea que el balón entre por la esquina inferior del arco siguiendo una trayectoria parabólica, ¿Cuál de las siguientes opciones representa la trayectoria del balón?",
      respuesta_correcta:2,
      posibles_respuestas:[" \\( y +  \\frac{45}{2}  =  \\frac{2}{5} (x- \\frac{15}{2})^2 \\)",
			   "\\( y- \\frac{45}{2} =  \\frac{-2}{5}(x- \\frac{15}{2})^2 \\)",
			   "\\( y + 225=4(x-\\frac{15}{2})^2 \\)",
			   "\\( y - 225=-4(x-\\frac{15}{2})^2\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"

    },
44: {enunciado_p:"Vista desde arriba una pista de atletismo tiene forma de elipse, la cual puede ser descrita por la ecuación: \\( 4x^2+9y^2-48x+72y+144=0 \\) Dónde las distancias representadas por \\(x\\) y \\(y\\) se miden en Hm; ¿Cuántas vueltas aproximadamente debe de dar un atleta para recorrer una distancia de \\(1000\\)m? Tenga en mente que para el perímetro P de una elipse \\( P \\approx 2 \\pi \\sqrt{(a^2+b^2) \\over 2} \\) donde \\(a,b\\) son la medida de los semiejes de la elipse.",
      respuesta_correcta:4,
      posibles_respuestas:["1",
			   "2",
			   "3",
			   "4"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
45: {enunciado_p:"¿Cuál es el valor de \\(k\\) para el que la recta \\( x+y+k=0 \\) es tangente a la circunferencia \\( x^2+y^2+6x+2y+6=0 \\)?",
      respuesta_correcta:2,
      posibles_respuestas:["\\( \\frac{1}{2} \\)",
			   " \\( 4 - 2 \\sqrt{2} \\)",
			   " \\( -4 + 2 \\sqrt{2} \\)",
			   " \\( 1 - \\sqrt{2} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
46: {enunciado_p:"Se tienen las siguientes ecuaciones: I. \\( 4x^2-4xy+y^2-6x+3y+2=0 \\) II.\\( 2x^2+3y^2-4x+12y-20=0 \\) III.\\( 3x^2+3y^2-4x+2y+6=0 \\). Las ecuaciones que representan cónicas degeneradas son:",
      respuesta_correcta:3,
      posibles_respuestas:["I y II",
			   "II y III",
			   " I y III",
			   "I, II y III"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
47: {enunciado_p:"Dos radiofaros están fijos y separados \\(8\\) Km, un barco se mueve de manera que la diferencia entre las distancias del mismo a cada radiofaro es constante. En un instante se supo que, respecto al punto medio entre ambos radiofaros, la posición del barco era \\( (5 Km, 3 \\sqrt{7} Km) \\); si ahora se sabe que bajo la misma trayectoria ha viajado \\(1\\) Km en la dirección paralela al segmento que une los radiofaros, ¿Cuál es la coordenada \\(y\\) de su actual posición?",
      respuesta_correcta:4,
      posibles_respuestas:["\\( \\sqrt{3} \\)",
			   "\\(2\\)",
			   "\\(2 \\sqrt{6} \\)",
			   "\\(6\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
48: {enunciado_p:"De las afirmaciones, la única falsa es:",
      respuesta_correcta:2,
      posibles_respuestas:["Si dos rectas son paralelas, la diferencia de sus pendientes es igual a cero.",
                                             "Si dos rectas son perpendiculares, entonces sus pendientes tienen el mismo signo.",
                                             "Si dos rectas son paralelas y distintas, entonces tienen diferentes intersecciones con los ejes coordenados.",
                                             "Si dos rectas son perpendiculares, entonces tienen diferentes intersecciones con los ejes coordenados."],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
	},
49: {enunciado_p:"Las rectas \\( \\overleftrightarrow{r} \\) y \\( \\overleftrightarrow{l} \\) de pendientes \\(m_1,m_2\\) respectivamente forman el ángulo recto de un triángulo rectángulo junto con el eje \\(x\\), la ecuacion de \\( \\overleftrightarrow{l} \\) es \\( x-3y+6=0 \\), entonces \\( m_1+m_2 \\)=",
      respuesta_correcta:4,
      posibles_respuestas:["\\(\\frac{1}{3}\\)",
			   "\\(\\frac{8}{3}\\)",
			   "\\(-\\frac{1}{3}\\)",
			   "\\(-\\frac{8}{3}\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"GA"
    },
50: {enunciado_p:"La secuencia mostrada en la imagen se forma usando cuadrados iguales, el número de cuadrados usados para el paso \\(16\\) es:",
      respuesta_correcta:2,
      posibles_respuestas:["45",
			   "47",
			   "48",
			   "49"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
      ,grafica:"../statics/images/pregunta50.svg"

    },
51: {enunciado_p:"Un cubo pintado de rojo es dividido en 27 cubitos pequeños de igual volumen. ¿Cuántos de los cubitos tienen pintadas al menos dos caras?",
      respuesta_correcta:3,
      posibles_respuestas:["18",
			   "19",
			   "20",
			   "21"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
52: {enunciado_p:"Durante la fotosíntesis las plantas absorben dióxido de carbono ( \\( CO_2 \\) ) y con ayuda de luz solar producen glucosa ( \\(C_6 H_12 O_6 \\) ) y oxígeno ( \\(O_2 \\) ), cómo lo indica la siguiente ecuación no balanceada: \\( CO_2 + H_2O \\longrightarrow C_6 H_12 O_6 + O_2 \\). Si la molécula de glucosa pesa alrededor de seis veces más que la de oxígeno, ¿Cerca de cuántos Kg de oxígeno produce un árbol por cada Kg de glucosa?",
      respuesta_correcta:1,
      posibles_respuestas:["1 Kg de oxígeno por cada Kg de glucosa",
			   "6 Kg de oxígeno por cada Kg de glucosa",
			   "\\( \\frac{1}{6}\\) Kg de oxígeno por cada Kg de glucosa",
			   "\\( \\frac{1}{2}\\) Kg de oxígeno por cada Kg de glucosa"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
53: {enunciado_p:"En la siguiente suma \\(A\\) y \\(B\\) representan dígitos, ¿Cuál es el valor de \\(A-B\\)?",
      respuesta_correcta:3,
      posibles_respuestas:["1",
			   "5",
			   "4",
			   "9"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
      ,grafica:"../statics/images/pregunta53.svg"

    },
54: {enunciado_p:"De un grupo de cinco amigos se sabe que: // - Ana es más alta que Carla. // - Érica es más grande que Carla. // - Daniel es más pequeño que Érica, pero más alto que Beatriz. ¿Quién es el más bajo?",
      respuesta_correcta:2,
      posibles_respuestas:["Ana",
			   "Beatriz",
			   "Carla",
			   "Daniel"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
55: {enunciado_p:"Por cada rectángulo descubierto en la figura de abajo se obtiene un punto. ¿Cuál es el número máximo de puntos que se pueden obtener?",
      respuesta_correcta:3,
      posibles_respuestas:["13",
			   "17",
			   "18",
			   "19"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
      ,grafica:"../statics/images/pregunta55.svg"

    },
56: {enunciado_p:"¿Cuántas veces se repite el dígito 3 al escribir los números del 1 al 100?",
      respuesta_correcta:2,
      posibles_respuestas:["19",
			   "20",
			   "22",
			   "23"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
57: {enunciado_p:"Entre las ciudades A y B se despachan trenes cada hora, un viaje completo toma dos horas y media; si un tren parte de Aa las 11:00 a.m, ¿Con cuántos trenes llendo de B hacia A se encontrará?",
      respuesta_correcta:3,
      posibles_respuestas:["2",
			   "3",
			   "4",
			   "5"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
    },
58: {enunciado_p:"Las tres balanzas estan en equilibrio, ¿Cuántos círculos podrán equilibrar la cuarta balanza?",
      respuesta_correcta:1,
      posibles_respuestas:["4",
			   "5",
			   "7",
			   "8"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"L"
      ,grafica:"../statics/images/pregunta58.svg"

    },
59: {enunciado_p:"En una bolsa se tienen bolas de diferentes colores: 5 verdes, 6 rojas y 4 negras; un juego consiste en sacar bolas de una en una hasta obtener una bola roja y una verde. ¿Cuál debe ser el número mínimo de bolas que se deben sacar para tener certeza de que se va a ganar?",
      respuesta_correcta:4,
      posibles_respuestas:["2",
			   "6",
			   "9",
			   "10"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
60: {enunciado_p:"Se tienen los siguientes eventos: I. Lanzar tres dados y obtener 5 o 6. II. Lanzar dos dados y obtener 4, 5 o 6. Respecto a las probabilidades de ambos eventos se puede decir que:",
      respuesta_correcta:4,
      posibles_respuestas:["Es más probable el evento I que el evento II.",
			   "Es más probable el evento II que el evento I.",
			   "Ambos eventos son igualmente probables.",
			   "Las "],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
61: {enunciado_p:"Una prueba consta de tres preguntas de falso y verdadero, se sabe que sólo una de las respuestas es falso, ¿Cuál es la probabilidad de aprobar?",
      respuesta_correcta:2,
      posibles_respuestas:["\\( \\frac{1}{4} \\)",
			   "\\( \\frac{3}{8} \\)",
			   "\\( \\frac{5}{8} \\)",
			   "\\( \\frac{3}{4} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
62: {enunciado_p:"¿Cuántos números de cinco cifras están compuestos sólo por los dígitos \\(4\\) y \\(6\\)?",
      respuesta_correcta:4,
      posibles_respuestas:["254",
			   "128",
			   "64",
			   "32"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
63: {enunciado_p:"El torneo local de los E-sports se llevará a cabo entre 9 equipos dividos en grupos de 3 donde cada equipo jugará una partida contra los otros dos de su grupo, al final del cual pasará el mejor de cada grupo; cada uno de los tres volverá a jugar una partida contra los otros dos para conocer a los dos finalistas; los cuales se enfrentarán en una última partida. ¿Cuál es el número de partidas jugadas en todo el torneo?",
      respuesta_correcta:2,
      posibles_respuestas:["12",
			   "13",
			   "14",
			   "15"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
64: {enunciado_p:"En una fábrica de LEDs, 2 de cada 10 salen defectuosos, ¿Cuál es la probabilidad de que al sacar una muestra de cuatro, todos sean defectuosos?",
      respuesta_correcta:4,
      posibles_respuestas:["45 falta",
			   "47 falta",
			   "48 falta",
			   "49 falta"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
65: {enunciado_p:"En una fábrica hay cuatro máquinas que trabajan en dos turnos, en cada turno cada máquina produce algunos fallos como se muestra en la tabla. ¿Cuál es la probabilidad de que se produzca un fallo en el turno \\(2\\) debido a la máquina \\(A\\)?",
      respuesta_correcta:3,
      posibles_respuestas:["\\(\\frac{1}{5}\\)",
			   "\\(\\frac{1}{3}\\)",
			   "\\(\\frac{3}{5}\\)",
			   "\\(\\frac{2}{5}\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
66: {enunciado_p:"Para armar un PC se disponen cuatro modelos diferentes de tarjeta gráfica, tres tipos de procesador y 4 capacidades de memoria RAM. Si para un diseño particular no se usa uno de los modelos de memoria RAM, ¿Cuántos diseños de PC están disponibles?",
      respuesta_correcta:2,
      posibles_respuestas:["30",
			   "36",
			   "48",
			   "52"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"P"
    },
67: {enunciado_p:"Los brazos de un compás miden 12 cm y el ángulo entre ellos es de 30°, ¿Cuál es el diámetro de una circunferencia dibujada con el compás?",
      respuesta_correcta:1,
      posibles_respuestas:["\\(24 \\sqrt{2- \\sqrt{3}} \\)cm",
			   "\\(12 \\sqrt{2-\\sqrt{3}}\\)cm",
			   "\\(6 \\sqrt{2-\\sqrt{3}}\\)cm",
			   "\\(3 \\sqrt{2-\\sqrt{3}} \\)cm"],
      video:"https://www.youtube.com/embed/pZ7",
      categoría:"T"
    },
68: {enunciado_p:"Un cable debe ser tendido entre dos postes de 10 y 5 metros de altura, si la separación entre las bases de los postes es de 12\m, ¿Cuál debe ser la longitud mínima del cable?",
      respuesta_correcta:3,
      posibles_respuestas:["\\( 8 \\sqrt{2} \\)m",
			   "\\(12\\)m",
			   "\\(13\\)m",
			   "\\(12 \\sqrt{2} \\)m"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
69: {enunciado_p:"En la figura el valor de x+y es:",
      respuesta_correcta:2,
      posibles_respuestas:["88°",
			   "94°",
			   "98°",
			   "101°"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
70: {enunciado_p:"Los cuadrados ABCD y EFGH tiene lados de igual longitud, la medida del ángulo ADE es:",
      respuesta_correcta:4,
      posibles_respuestas:["135°",
			   "145°",
			   "150°",
			   "160°"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
71: {enunciado_p:"Si el \\( \\cos \\theta = -\frac{2}{3} \\) y \\( \\sin \\theta < 0 \\), entonces \\( \\csc \\theta = \\)",
      respuesta_correcta:4,
      posibles_respuestas:["\\( \\frac{-3}{2} \\)",
			   "\\( \\frac{3 \\sqrt{5}}{5} \\)",
			   "\\( -\\frac{3 \\sqrt{5}}{5} \\)",
			   "\\( \\frac{\\sqrt{3}}{2} \\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
72: {enunciado_p:"En un reloj analógico se marcan las 8:30, ¿Cuál es la medida del ángulo más pequeño formado por las manecillas?",
      respuesta_correcta:1,
      posibles_respuestas:["\\(\\frac{\\pi}{3}\\)",
			   "\\(\\frac{\\pi}{6}\\)",
			   "\\(\\frac{\\pi}{15}\\)",
			   "\\(\\frac{2\\pi}{5}\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
73: {enunciado_p:"Sobre las soluciones a la ecuación \\( \\sin(2x)=2\\), se puede decir que:",
      respuesta_correcta:4,
      posibles_respuestas:["Sólo existe una, \\(x=\\pi\\).",
			   "Son reales.",
			   "Son infinitas.",
			   "No existen."],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
74: {enunciado_p:"Sobre los lados de un triángulo rectángulo se dibujan semicírculos, de la figura \\(A+B=\\)",
      respuesta_correcta:3,
      posibles_respuestas:["\\(2C\\)",
			   "\\(C^2\\)",
			   "\\(C\\)",
			   "\\(\\frac{C}{2}\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
75: {enunciado_p:"Al unir las aristas \\(E,F,G\\) del siguiente cubo se forma un triángulo, ¿Cuál es la medida del ángulo \\(EFG\\)? Recuerde que si \\( \\cos(\\alpha)=b\\) entonces \\( arccos(b)=\\alpha\\).",
      respuesta_correcta:2,
      posibles_respuestas:["\\(\\frac{\\pi}{2}\\)",
			   "\\(arccos(\\frac{1}{\\sqrt{3}})\\)",
			   "\\(arccos(\\frac{1}{\\sqrt{2}})\\)",
			   "\\(arccos(\\frac{\\sqrt{4}}{\\sqrt{6}})\\)"],
      video:"https://www.youtube.com/embed/pZ71EJ7XigU",
      categoría:"T"
    },
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

numpregunta = document.getElementById("numeropregunta")
numpregunta.innerHTML = contador
imagenpregunta = document.getElementById("imagenpregunta")

try{
  imagenpregunta.src =  preguntas[contador.toString()]["grafica"];
}catch(error){
}

$("#siguiente").click(function(event){

    for (var i=0, iLen=radios.length; i<iLen; i++) {
      radios[i].disabled = false;
    }
    video.style.display = "none";

    clearcolors()
    clearbuttons()
    contador = contador + 1


    if(contador <= numero_preguntas){
      enunciado.innerHTML = preguntas[contador.toString()]['enunciado_p']
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"enunciado_p"]);
      numpregunta.innerHTML = contador
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
      try{
        imagenpregunta.src =  preguntas[contador.toString()]["grafica"];
      }catch(error){
      }

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
