function ref(){
function date(){
	var now=new Date();
	var todate=now.getDate();
	
	var printdate=document.getElementById("date")
	printdate.innerText=todate;
}
date()

function month(){
	var now=new Date();
	var tomonth=now.getMonth();
	var printmonth=document.getElementById("month")
	printmonth.innerText="0"+(1+tomonth)
}
month()

function year(){
	var now= new Date();
	var toyear=now.getFullYear();
	var printyear=document.getElementById("year");
	printyear.innerText=toyear
}
year()
}
ref()


function print(){
	function hour(){
		var now=new Date();
		var tohour= now.getHours();
		var printhour=document.getElementById("hour")
		printhour.innerText=tohour
	}
	hour()


	function min(){
		var now=new Date();
		var tomin= now.getMinutes();
		var printmin=document.getElementById("min")
		printmin.innerText=tomin
	}
	min()


	function second(){
		var now=new Date();
		var tosec= now.getSeconds();
		var printsec=document.getElementById("sec")
		printsec.innerText=tosec
	}
	second()
}
setInterval(print,1000)

function meridian(){
	var now=new Date();
	var am=now.getHours();
	console.log(am)
	var morning=document.getElementById("mor")
	var evening=document.getElementById("eve")
	
	if(am<=12){
		morning.style.backgroundColor="red"
	}
	else{
		evening.style.backgroundColor="red"
	}
}
meridian()

function week(){
	var now=new Date();
	var sun=now.getDay();
	console.log(sun)
	
	if(sun==0){
		var color=document.getElementById("sun")
		color.style.backgroundColor="red"
	}
	else if(sun==1){
		var color1=document.getElementById("mon")
		color1.style.backgroundColor="red"
	}
	else if(sun==2){
		var color2=document.getElementById("tues")
		color2.style.backgroundColor="red"
	}
	else if(sun==3){
		var color3=document.getElementById("wed")
		color3.style.backgroundColor="red"
	}
	else if(sun==4){
		var color4=document.getElementById("thurs")
		color4.style.backgroundColor="red"
	}
	else if(sun==5){
		var color5=document.getElementById("fri")
		color5.style.backgroundColor="red"
	}
	else if(sun==6){
		var color6=document.getElementById("sat")
		color6.style.backgroundColor="red"
	}
	
}
week()