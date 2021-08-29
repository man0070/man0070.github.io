var x=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < x.length; i++) {
	if(x[i].charAt(0)==='J'|| x[i].charAt(0)==='j'){
        console.log("Goodbye "+ x[i])
	}
	else{
		console.log("Hello "+ x[i])
	}
}