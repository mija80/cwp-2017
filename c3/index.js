function proverka (broj1 ,broj2){
	if (broj1 > broj2) {
		console.log( broj1 + "e pogolem od" + broj2);
	}else if (broj1 < broj2){
		console.log(broj1 + "e pomal od" + broj2);

	}else {
		console.log("Broevite se ednakvi");
	}

	}


proverka(11, 10);

function calculateDogAge(age){
	var dogYears = age * 7 ;
	console.log("My dog is " + dogYears + "old");
}	

calculateDogAge(6)

//c2f(18); // X celziusovi stepeni vo farenhajtovi stepeni 
//f2c(120); // x farenhajtovi stepeni vo celziusovi stepeni 


//temp(12, 'c2f'); // x celziusovi stepeni vo farenhajtovi stepeni 
//temp(102, 'f2c'); // x farenhajtovi stepeni vo celziusovi 


//(degree*9)/5+32
//((degree - 32)*5)/9;



function ftoc(degree){
	console.log("fahrenheit to celsius:" + ((degree -32)*5)/9);
}


ftoc(20);

function temp(degree, conversionType){
	if(conversionType == "c2f") {
		console.log("Celsius to Fahrenheit:" + ((degree*9)/5 + 32) + ".");

	} else if (conversionType == "f2c") {
		console.log("Fahrenheit to Celsius:" + ((degree - 32)*5)/9+".");
	}else{
		console.log("Cant understan question");
	}
}

temp(12,'c2f');
temp(102,'f2c');
temp(102,'semos')

function even(num){
	if(num % 2 == 0 ) {
		console.log("Number is even");

	}else if (typeof num != "number"){
		console.log("Enter number not string!");

	}else{
		console.log("Number is odd");
	}
}
 even(123);



 // predavanje //
 var niza = ['a', 'b','c', 'd','e'] ;

 console.log(niza);

 console.log(niza[2]);

 // niza [20] = 'z';
 niza.push('z'); 

 console.log(niza[20]);

 console.log(niza.length);




 var niza2 = [ 'bojan' ,223305, true,'test'];
 console.log(niza2);

 console.log(niza2[1]);

 var niza3 = [
     [1,2,3,4,5],
     [6,7,8,9,0],
     ['a','b','c','d','e',[10,20,30,40]] 
 ];
 console.log(niza3);
 console.log(niza3[1][2]);
 console.log(niza3[2][5][2]);

 //console.log(niza3.12); //ova ne funkcionira kaj nizi


 var o1 = {
 	ime: 'Bojan',
 	prezime:'Gavrovski',
 	oceni:[6,6,7,5,7,6],
 	profesori:[
 	     {
 	     	ime:"pero",
 	     	prezime:'Perovski',

 	     },
 	     {
 	     	ime:'Janko',
 	     	prezime:'Jankovski'
 	     }

 	]
 	
 };

 console.log(o1);
 console.log(o1['ime']);
 console.log(o1['prezime']);

 console.log(o1.ime);
 console.log(o1.prezime);
 console.log(o1.oceni[3]);
 console.log(o1.profesori[1].prezime);


 for ( var i = 0; i < 10; i = i + 1) { //  start, end,step
 	console.log('Hello!'); 
 	console.log(i);
 }


 var niza4 = [ 20,30,40,50,60,70,80,90];

 //console.log(niza4[0]);
 //console.log(niza4[1]);
 //console.log(niza4[2]);
 //console.log(niza4[3]);
 //console.log(niza4[4]);

 for(var i = 0; i < 5 ; i++) {
 	console.log(niza4[i]);
 }

 for(var i=0; i < length; i++) {
 	console.log(niza4[i])
 }



 var niza5=[2,2,3,5,4,5,4,6,7,8,9];

 for (var i = 0; i < niza5.length;i++) {
 	if(niza5[i] % 2 == 0) {
 		console.log(niza5[i]);

 	} 
 }
 	
// niza

 
  