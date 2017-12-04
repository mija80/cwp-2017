var kolichinanaBrashno = 0.8;
var beloBrashno = false ;
var crnoBrashno = false ;





// > (pogolemo)

// < (pomalo)

// >= (pogolemo ili ednakvo)

// <= (pomalo ili ednakvo)

// == ( ednakvo)

// === (apsolutno ednakvo, identichno)

// != (ne ednakvo ,razlichno)

// !== (apsolutno neednakvo)

if (kolichinanaBrashno > 1) {
	console.log('Kje pravime torta! :D');
} else {
	console.log('Prvo kupi brashno,pa posle ke pravime');
} 



if (beloBrashno == true) {
	console.log ('Kje pravimne so belo brashno!');
} 
else if (crnoBrashno == true) {
	console.log('Kje pravime so crno brashno!');
}
 else {
	console.log('Nema da pravime... :( ');
}


var kolichinanaMleko = true;
var voda =true;
 
 if ( kolichinanaMleko == true) {
 	console.log( 'Kje pravime so mleko');
 }
 else if (voda == true) {
 	console.log( 'Kje pravime so voda');

 }
 else {
 	console.log('Nema da pravime...');
 }


   //   +    -    /    *   %

   console.log(2 + 2);
   console.log(2 / 135);
   console.log(4 - 12);
   console.log(3 * 10);

   console.log(19 % 4);



   var broj = 4;
   

   if (broj % 2 == 0) {
      console.log('paren');
   } else {
   	console.log('neparen');
   }

   var ime = 'Bojan';
   
   console.log(ime.lenght);


   var mesec = "maj";

    if (mesec.lenght % 2 == 0) {
    	console.log( 'ubavmesec');

    } else { 
    	console.log( 'grdmesec');
    }

  
  // && i

  //   ||  ili


 kolichinaBrashno = 1;
 var brashno = true;

 if (brashno == true && kolichinaBrashno >=1) {
 	console.log('Ima brasno i e vo dovolna kolichina');
 } else {
 	console.log('Nema brashno, ili ne e vo dovolna kolichina');
 }

broj = 7 ;
if(broj <5 || broj > 10){
	console.log('brojot e pomal od 5 ili pogolem od 10');
} else{
	console.log('brojot e vo opsegot od 5 do 10 vluchuvajki gi i 5 i 10 ');
}

// true && true = true 
// true && false = false
// false && true = false
// false && false = false

// true || true = true 
// true || false = true 
// false || true = true
// false || false = false


var mesec = 'Januari';

switch(mesec){

     case 'Januari':
        console.log('Go odbravte mesecot Januari');
        break;
     case 'Fevruari':
        console.log('Go odbravte mesecot Fevruari');
        break;   
     case 'Mart':
        console.log('Go odbravte mesecot Mart');
        break; 
     case 'April':
        console.log('Go odbravte mesecot April');
        break;       
      case 'Maj':
        console.log('Go odbravte mesecot Maj');
        break;  
      case 'Juni':
        console.log('Go odbravte mesecot Juni');
        break;  
      case 'Juli':
        console.log('Go odbravte mesecot Juli');
        break; 
      case 'Avgust':
        console.log('Go odbravte mesecot Avgust');
        break; 
      case 'Septemvri':
        console.log('Go odbravte mesecot Septemvri');
        break; 
      case 'Oktomvri':
        console.log('Go odbravte mesecot Oktomvri');
        break;  
      case 'Noemvri':
        console.log('Go odbravte mesecot Noemvri');
        break;   
      case 'Dekemvri':
        console.log('Go odbravte mesecot Dekemvri');
        break;  
      default:
          console.log ('Ne postoi vakov mesec') ;
          break;
}


switch(mesec){
	case 'Januari':
	case 'Fevrouari':
	case 'Mart':
	case 'Oktomvri':
	case 'Noemvri':
	case 'Dekemvri':
	    console.log('Odbravte laden mesec');
	break;
	case 'April':
	case 'Maj':
	case 'Juni':
	case 'Juli':
	case 'Avgust':
	case 'Septemvri':
	     console.log ('Odbravte topol mesec');
	break;
	default:
	      console.log('Ne postoi vakov mesec');
}



function zdravo(ime,prezime){
	console.log('Zdravo!' + ime +  prezime + '!');
}

zdravo('Bojan','Bojanovski');
zdravo('Pero','Perovski');


function c2f(c){
	var f = c * 1.8 + 32;
	console.log(f);
}
function f2c(f){
	var c = (f - 32) / 1.8;
	console.log(c);
}

function temp(t,ct) { // temperature,conversion type
    switch(ct)
} 










// ubavoime (Bojan) parni bukvi;
//grdo ime , neparni bukvi;

//gluposti moi
function ime ( 'Bojan'ubavoIme,grdoIme); {
	console.log(parniBukvi,neparniBukvi)
}
switch (parniBukvi) {
	case 'Bojan'
	console.log(OdbravteubavoIme)
}
switch case (neparniBukvi) {
	case 'Bojan'



function ubavoIme (ime){
	switch(ime.length % 2) {
		case 0 :
		console.log('Ubavo ime');
		break;
		case 1 :
		console.log( 'Ne ubavo ime');
		break;

	}
}
ubavoIme('Bojan');