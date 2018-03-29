var Calculadora = {
Init: function() {
this.numero1 = '';
this.numero2 = '';
this.inputVals = document.getElementById('display');
this.resultado = document.getElementsByClassName('resultado')[0];
this.btnSuma = document.getElementsByClassName('suma')[0];
this.btnResta = document.getElementsByClassName('resta')[0];
this.btnMultiplica = document.getElementsByClassName('multiplica')[0];
this.btnDivide = document.getElementsByClassName('divide')[0];
this.ejecutar = document.getElementById('igual');
this.EscucharEventos();
this.asignarEventos();
},

}

var aux=Object.create(Calculadora);
var aux_num1=aux.Init.numero1=0;
var aux_num2=aux.Init.numero2=0;
var aux_control=aux.Init.numero2=0;
var operador='';
var result=0;
var control=0;


function init(){
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var dec= document.getElementById('punto');
  var suma=document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion= document.getElementById('por');
  var dividicion= document.getElementById('dividido');


  var varl = Object.create(Calculadora);

  uno.onclick = function(e){
    var display=document.getElementById('display').textContent;

    var aux= display.substring(display.length,(display.length)-1);
        if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
          varl.Init.inputVals= '';
        }
        else if(display.indexOf('.')) {
          varl.Init.inputVals= display;
        }
      document.getElementById('display').textContent= varl.Init.inputVals+"1";
      display=document.getElementById('display').textContent;
    }
    dos.onclick = function(e){
      var display=document.getElementById('display').textContent;
      var aux= display.substring(display.length,(display.length)-1);
      if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
        varl.Init.inputVals= '';
      }
      else if(display.indexOf('.')) {
        varl.Init.inputVals= display;
      }
        document.getElementById('display').textContent= varl.Init.inputVals+"2";
      }
    tres.onclick = function(e){
      var display=document.getElementById('display').textContent;
      var aux= display.substring(display.length,(display.length)-1);
      if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
        varl.Init.inputVals= '';
      }
      else if(display.indexOf('.')) {
        varl.Init.inputVals= display;
      }
      document.getElementById('display').textContent= varl.Init.inputVals+"3";
      }

      cuatro.onclick = function(e){
        var display=document.getElementById('display').textContent;
        var aux= display.substring(display.length,(display.length)-1);
        if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
          varl.Init.inputVals= '';
        }
        else if(display.indexOf('.')) {
          varl.Init.inputVals= display;
        }
          document.getElementById('display').textContent= varl.Init.inputVals+"4";
        }
        cinco.onclick = function(e){
          var display=document.getElementById('display').textContent;
          var aux= display.substring(display.length,(display.length)-1);
          if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
            varl.Init.inputVals= '';
          }
          else if(display.indexOf('.')) {
            varl.Init.inputVals= display;
          }
            document.getElementById('display').textContent= varl.Init.inputVals+"5";
        }

        seis.onclick = function(e){
          var display=document.getElementById('display').textContent;
          var aux= display.substring(display.length,(display.length)-1);
          if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
            varl.Init.inputVals= '';
          }
          else if(display.indexOf('.')) {
            varl.Init.inputVals= display;
          }
            document.getElementById('display').textContent= varl.Init.inputVals+"6";
        }

        siete.onclick = function(e){
          var display=document.getElementById('display').textContent;
          var aux= display.substring(display.length,(display.length)-1);
          if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
            varl.Init.inputVals= '';
          }
          else if(display.indexOf('.')) {
            varl.Init.inputVals= display;
          }
            document.getElementById('display').textContent= varl.Init.inputVals+"7";
        }

        ocho.onclick = function(e){
          var display=document.getElementById('display').textContent;
          var aux= display.substring(display.length,(display.length)-1);
          if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
            varl.Init.inputVals= '';
          }
          else if(display.indexOf('.')) {
            varl.Init.inputVals= display;
          }
            document.getElementById('display').textContent= varl.Init.inputVals+"8";
        }

        nueve.onclick = function(e){
          var display=document.getElementById('display').textContent;
          var aux= display.substring(display.length,(display.length)-1);
          //  alert (aux);
          if (display =='0'|| aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
            varl.Init.inputVals= '';
          }
      //  alert (display.length);
          else if(display.indexOf('.')) {
            varl.Init.inputVals= display;
          }


            document.getElementById('display').textContent= varl.Init.inputVals+"9";
        }

        cero.onclick = function(e){
          var display=document.getElementById('display').textContent;
          var aux= display.substring(display.length,(display.length)-1);
           alert(aux);

          if (display[0]!=='0' || display == '0.' ) {
            varl.Init.inputVals= display;
            if (aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
              varl.Init.inputVals= '';
            }
          }else  {
            varl.Init.inputVals= '';
          }
            document.getElementById('display').textContent= varl.Init.inputVals+"0";
        }
      punto.onclick=function(e){
        var display=document.getElementById('display').textContent;

         if (display.length==0) {
            var x=document.getElementById('display').textContent= '0.';


         }
         else if (display.indexOf('.')== -1) {
           document.getElementById('display').textContent= display+'.';
         }
          // display=document.getElementById('display').textContent;

          //alert (display);

      }

}





function limpiar_display(){
  aux_num1=0;
  aux_num2=0;
  result=0;
  document.getElementById('display').textContent=0;
}

function mas_menos(){
  var display=document.getElementById('display').textContent;
//alert (display[0]);

  if (display.indexOf('-')) {
      if (display == '0.' || display == '0' ) {
        document.getElementById('display').textContent
      }else {
      //  alert(display.indexOf('-'));
        document.getElementById('display').textContent='-'+display;
      }

  }else {
    display=display.substring(1);
    document.getElementById('display').textContent=display;
  }

}

function suma(){
 var display=document.getElementById('display').textContent;


 var aux= display.substring(display.length,(display.length)-1);
     aux_num1= parseFloat(display);

   operador='+';
        if (aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
           document.getElementById('display').textContent=display
        }else {
          document.getElementById('display').textContent=display+'+';
        }
  // alert( numero1);
    //  var aux1=[num1mas,operador];
      //alert(aux[1]);
}

function resta(){
 var display=document.getElementById('display').textContent;

 var aux= display.substring(display.length,(display.length)-1);
     aux_num1= parseFloat(display);

   operador='-';
        if (aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
           document.getElementById('display').textContent=display
        }else {
          document.getElementById('display').textContent=display+'-';
        }
  // alert( numero1);
    //  var aux1=[num1mas,operador];
      //alert(aux[1]);
}

function multiplicar(){
 var display=document.getElementById('display').textContent;

 var aux= display.substring(display.length,(display.length)-1);
     aux_num1= parseFloat(display);

   operador='*';
        if (aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
           document.getElementById('display').textContent=display
        }else {
          document.getElementById('display').textContent=display+'*';
        }
  // alert( numero1);
    //  var aux1=[num1mas,operador];
      //alert(aux[1]);
}

function dividir(){
 var display=document.getElementById('display').textContent;

 var aux= display.substring(display.length,(display.length)-1);
     aux_num1= parseFloat(display);

   operador='/';
        if (aux == '+'|| aux == '-'|| aux == '*'|| aux == '/') {
           document.getElementById('display').textContent=display
        }else {
          document.getElementById('display').textContent=display+'/';
        }
  // alert( numero1);
    //  var aux1=[num1mas,operador];
      //alert(aux[1]);
}



function operar(){

    var display=document.getElementById('display').textContent;
    aux_num2=parseFloat(display);
       switch (operador) {
         case '+':
         result=aux_num1+aux_num2;
         break;
         case '-':
           result=aux_num1-aux_num2;
           break;
          case '*':
            result=aux_num1*aux_num2;
            break;
          case '/':
            result=aux_num1/aux_num2;
            if (result=='NaNa') {
              result= 0;
            }
            break;


         default:

       }
      document.getElementById('display').textContent= result;


}
