
var siguiente_pregunta = "Cual es la capital de Colombia"
var radios = document.formquestions.answer;
var div_respuestas = document.getElementsByName("respuestas");

var botones = document.getElementsByName("boton");

var sig_boton = document.getElementById('siguiente')
sig_boton.disabled = true;
var preguntas = {
  1: {enunciado_p:"When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are \\(x = {-b \ \\pm \\sqrt{b^2-4ac} \\over 2a}\\)", respuesta_correcta:1, posibles_respuestas:["-1","1.5","-0.5","3"], video:"https://www.youtube.com/embed/Z9VR_tJANuY"},
  2: {enunciado_p:"Cuál es la pendiente de la recta que pasa por los puntos (0,2) , (5,12).", respuesta_correcta:3, posibles_respuestas:["3","2.5","2","-1"],video:"https://www.youtube.com/embed/Z9VR_tJANuYM"},
  3: {enunciado_p:"Cuál es la pendiente de la recta perpendicular a la recta que pasa por los puntos (1,2) y (4,5)", respuesta_correcta:1, posibles_respuestas:["-1","1.5","-0.5","3"], video:"https://www.youtube.com/embed/Z9VR_tJANuY"},
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
      video.src  = preguntas[contador.toString()]['video'];
      video.disabled = true;
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
