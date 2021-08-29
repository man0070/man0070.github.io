var x=new Array();
x[0]="Yaakov";
x[1]="John";
x[2]="Jen";
x[3]="jason";
x[4]="paul";
x[5]="frank";
x[6]="larry";
x[7]="paula";
x[8]="laura";
x[9]="jim";


for (var i = 0; i < x.length; i++) {
	if(x[i].charAt(0)==='J'|| x[i].charAt(0)==='j'){
        console.log("Goodbye "+ x[i])
	}
	else{
		console.log("Hello "+ x[i])
	}
}