
function GetURLParameter(sParam){
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++){
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam){
          return sParameterName[1];
      }
  }
}


var section = GetURLParameter('section');
var preguntas = ""
var num_correctas = 0;
// var siguiente_pregunta = ""
 var radios = document.formquestions.answer;
 var div_respuestas = document.getElementsByName("respuestas");
 var botones = document.getElementsByName("boton");
 var sig_boton = document.getElementById('siguiente')
 var ver_boton = document.getElementById('verificar')
 sig_boton.disabled = true;
 var  contador = 0;
 var enunciado = document.getElementById("enunciado_p");
// console.log(enunciado);
 var respuesta_1 = document.getElementById("respuesta_1_label");
 var respuesta_2 = document.getElementById("respuesta_2_label");
 var respuesta_3 = document.getElementById("respuesta_3_label");
 var respuesta_4 = document.getElementById("respuesta_4_label");
 //var video = document.getElementById("video_solucion");
//
 // enunciado.innerHTML = preguntas['enunciado_p'];
 // respuesta_1.innerHTML = preguntas['posibles_respuestas'][0];
 // respuesta_2.innerHTML = preguntas['posibles_respuestas'][1];
 // respuesta_3.innerHTML = preguntas['posibles_respuestas'][2];
 // respuesta_4.innerHTML  = preguntas['posibles_respuestas'][3];
 // video.src  = preguntas['video'];
 // video.style.display = "none";
//
// console.log(preguntas['posibles_respuestas'][0]);
// var numero_preguntas = Object.keys(preguntas).length
//
// console.log(enunciado.textContent);
// console.log(numero_preguntas);


// function clearcolors(event){
//   var button_checked = document.getElementById($('input[name=answer]:checked', '#questions_form').val());
//   button_checked.style.backgroundColor = document.getElementById("jumbo_questions").style.backgroundColor;
//   var container_green = document.getElementById("answer"+ preguntas['respuesta_correcta'].toString() + "_container")
//   container_green.style.backgroundColor = document.getElementById("jumbo_questions").style.backgroundColor;
// }

function clearbuttons(event){
  for (var i=0, iLen=radios.length; i<iLen; i++) {
    radios[i].checked = false;
  }
}

 numpregunta = document.getElementById("numeropregunta")
 numpregunta.innerHTML = contador
 imagenpregunta = document.getElementById("preguntaimagen")
 imagenpregunta.innerHTML = ""




window.addEventListener('load', function () {
  $.ajax(
    {
      data:{"section":section, 'position':contador},
      url:'/set_question/',
      type:'POST',
      success: function(envs){
        preguntas = envs
        pregunta(preguntas)
      },
        error:function(){
          alert("Aquí error");
        }
    });
});


try{
  var imagen =  preguntas["grafica"];
  if(imagen != undefined){
    //console.log(imagen);
    imagenpregunta.innerHTML = "<img  src='" + imagen +  "' width='350' height='200'>"
  }
}catch(error){
}



function pregunta(preguntas){
    for (var i=0, iLen=radios.length; i<iLen; i++) {
      radios[i].disabled = false;
    }
    //video.style.display = "none";
    //console.log(preguntas['enunciado_p']);
    if(preguntas['enunciado_p'] != "Gracias" ){
      contador = contador + 1
      enunciado.innerHTML = preguntas['enunciado_p']
      numpregunta.innerHTML = contador
      respuesta_1.innerHTML = preguntas['posibles_respuestas'][0];
      respuesta_2.innerHTML = preguntas['posibles_respuestas'][1];
      respuesta_3.innerHTML = preguntas['posibles_respuestas'][2];
      respuesta_4.innerHTML = preguntas['posibles_respuestas'][3];
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
      //video.src  = preguntas['video'];
      //video.disabled = true;
      imagenpregunta.innerHTML = ""
      try{
        imagen =  preguntas["grafica"];
        if(imagen != undefined){
          //console.log(imagen);
          imagenpregunta.innerHTML = "<img  src='" + imagen +  "' width='350' height='200'>"
        }
      }catch(error){
      }
    }else{
      enunciado.textContent = 'Puntaje: ' + num_correctas.toString() + " / " + contador.toString();
      clearbuttons()
      for (var i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].style.display = "none";
      }
      for (var i=0, iLen=div_respuestas.length; i<iLen; i++) {
        div_respuestas[i].style.display = "none";
      }
      for (var i=0, iLen=botones.length; i<iLen; i++) {
        botones[i].style.display = "none";
      }
      imagenpregunta.style.display = "none";
      numpregunta.innerHTML = ""
    }
    sig_boton.disabled = true;
    ver_boton.disabled = false;
}



sig_boton.addEventListener('click', function(){
  //clearcolors()
  clearbuttons()
  $.ajax(
    {
      data:{"section":section, 'position':contador},
      url:'/set_question/',
      type:'POST',
      success: function(envs){
        preguntas = envs
        pregunta(preguntas)
      },
        error:function(){
          alert("Aquí error");
        }
});
});

$("#verificar").click(function(event){
  var button_checked = document.getElementById($('input[name=answer]:checked', '#questions_form').val());
  //console.log(button_checked);

  if (button_checked === null){
    alert('Por favor seleccione una respuesta')
  }else{
    //video.style.display =  "none";//"inline-block";

    //clearcolors()
    //var container_green = document.getElementById("answer"+ preguntas['respuesta_correcta'].toString() + "_container")
    //container_green.style.backgroundColor = '#00b700';
    var respuesta_correcta = document.getElementById("respuesta_" + preguntas['respuesta_correcta'].toString() + "_label");

    respuesta_correcta.innerHTML = respuesta_correcta.innerHTML +  " &#9989;";
    if($("#respuesta_" + preguntas['respuesta_correcta'].toString()).is(":checked")){
        num_correctas = num_correctas + 1;
    }else{
      //console.log("wrong");
      var button_checked = document.getElementById($('input[name=answer]:checked', '#questions_form').val());
      button_checked.getElementsByTagName("label")[0].innerHTML = button_checked.getElementsByTagName("label")[0].innerHTML  + "	&#10060;"
    }
    for (var i=0, iLen=radios.length; i<iLen; i++) {
      radios[i].disabled = true;
    }
    sig_boton.disabled = false;
    ver_boton.disabled = true;

  }
});
