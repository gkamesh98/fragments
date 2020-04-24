var de = 1;
function changecolor(){
	myTable = document.getElementById('myTable');
	for(var r = 0 ;r<5;r++)
	{
		for(var c= 0; c<5;c++)
		{
			if(myTable.rows[r].cells[c].innerHTML!=""){
			myTable.rows[r].cells[c].style.backgroundColor = "#02022bf2";
			}
			else{
				myTable.rows[r].cells[c].style.backgroundColor = "#121263e3";
			}
		}
	}
	
}

function generate(){
	document.querySelector(".share").style.display = "none";
	document.querySelector(".how").style.display = "none";
	var height = 5;
	var width = 5;
	var myTable = document.getElementById('myTable');
	var el = myTable.rows.length;
	if(document.getElementById('score').rows.length == 0){
		var x=document.getElementById('score').insertRow(0);
		var y=  x.insertCell(0);
		x.insertCell(1);
		document.getElementById('score').rows[0].cells[0].innerHTML = "score";
		document.getElementById('score').rows[0].cells[0].setAttribute("id","sc");
	}
		
	if(el == 0){	
		document.querySelector("#ok").style.backgroundColor = "#1d253573";
		document.getElementById('score').rows[0].cells[0].innerHTML = "score";
		document.getElementById('score').rows[0].deleteCell(1);
		document.getElementById('score').rows[0].insertCell(1);
		document.getElementById('score').rows[0].insertCell(2);
		document.getElementById('score').rows[0].cells[1].innerHTML = "<div id=\"dele\" onclick=\"\del()\"><img src=\"img\\bin.svg\" alt=\"delete\" height='32px' width='32px'></div>";
		document.getElementById('score').rows[0].cells[2].innerHTML = "steps";
		document.getElementById('score').rows[0].cells[2].setAttribute("id","sc");
		/*document.getElementById('score').rows[0].cells[2].innerHTML = "<div id=\"dele\" onclick=\"\del()\"><img src=\"img\\bin.svg\" alt=\"delete\" height='32px' width='32px'></div>";
		document.getElementById('score').rows[0].cells[2].rowSpan = 2;
		document.getElementById('score').rows[0].cells[2].colSpan = 2;
		//document.getElementById('score').rows[0].cells[2].setAttribute("onclick","del()");
		//document.getElementById('score').rows[0].cells[2].setAttribute("id","dele");
		document.getElementById('score').rows[1].deleteCell(2);*/
		
		for(var r=0;r<parseInt(height,10);r++)
		{
			var x=document.getElementById('myTable').insertRow(r);
			for(var c=0;c<parseInt(width,10);c++)  
			{
				var y=  x.insertCell(c);
				y.setAttribute("name",r.toString().concat(",").concat(c.toString()));
				y.setAttribute("class","box")
				name=r.toString().concat(",").concat(c.toString()).concat(",").concat(height.toString()).concat(",").concat(width.toString())
				s= "check(".concat(name).concat(")")
				y.setAttribute("onclick",s)
				y.innerHTML=""; 
			}
		}
	}
	else{
		//myTable = document.getElementById('myTable');
		for(var r=0;r<parseInt(height,10);r++)
		{
			for(var c=0;c<parseInt(width,10);c++)  
			{
				myTable.rows[r].cells[c].innerHTML="";
				document.getElementById('score').rows[0].cells[0].innerHTML = "score";
				document.getElementById('score').rows[0].cells[2].innerHTML = "steps";
			}
		}
	}
	myTable = document.getElementById('myTable');
	i = Math.floor(Math.random()*(height));
	j = Math.floor(Math.random()*(width));
    myTable.rows[i].cells[j].innerHTML = "2048";
	document.querySelector("#begin").type = 'image';
	document.querySelector("#begin").src = "img\\replay.svg";
	document.querySelector("#begin").src = "img\\replay.svg";
	document.querySelector("#begin").alt = "retry";
	//document.getElementsById('score').style.display="block";
	changecolor();
	return false;
	
}

function del(){
	if(de == 1){
		de = 0;
		document.getElementById('dele').style.backgroundColor="blue";
	}
	else if(de == 0){
		de = 1;
		document.getElementById('dele').style.backgroundColor="red";
	}
}

function check(p,q,height,width){
	myTable = document.getElementById('myTable');
	if(de==0 && myTable.rows[p].cells[q].innerHTML!='2048'){
		myTable.rows[p].cells[q].innerHTML = "";
		de = 1;
		document.getElementById('dele').style.backgroundColor='red';
	}
	else{
		var s = new Array(4);
		var count = -1;
		de = 1;
		document.getElementById('dele').style.backgroundColor='red';
		if(myTable.rows[p].cells[q].innerHTML != ""){
		
			if(p-1>=0){
				if( myTable.rows[p-1].cells[q].innerHTML=="")
				{
					count = count+1;
					s[count] = myTable.rows[p-1].cells[q];
				}
			}
			if(p+1<height)
			{
				if( myTable.rows[p+1].cells[q].innerHTML=="")
				{
					count = count+1;
					s[count] = myTable.rows[p+1].cells[q];
				}
			}
			if(q-1>=0){
				if( myTable.rows[p].cells[q-1].innerHTML=="")
				{
					count = count+1;
					s[count] = myTable.rows[p].cells[q-1];
					
				}
			}
			if(q+1<width)
			{
				if( myTable.rows[p].cells[q+1].innerHTML=="")
				{
					count = count+1;
					s[count] = myTable.rows[p].cells[q+1];
					
				}
			}
			if(count<=0)
			{
				myTable = document.getElementById('myTable');
				//myTable.rows[0].cells[0].innerHTML = count.toString();
			}
			else{
				score = document.getElementById('score');
				myTable = document.getElementById('myTable');
				if(score.rows[0].cells[0].innerHTML == "score" ){
					now = "0";
				}
				else{
					now = score.rows[0].cells[0].innerHTML;
				}
				score.rows[0].cells[0].innerHTML = (parseInt(now)+(2048/(parseInt(myTable.rows[p].cells[q].innerHTML)))).toString();
				if(score.rows[0].cells[2].innerHTML == "steps" ){
					now = "0";
				}
				else{
					now = score.rows[0].cells[2].innerHTML;
				}
				score.rows[0].cells[2].innerHTML = (parseInt(now)+1).toString();
				
				val = myTable.rows[p].cells[q].innerHTML;
				myTable.rows[p].cells[q].innerHTML = "";
				intval = parseInt(val);
				intval = intval/2;
				if(intval !=  2 ){
					r=Math.floor(Math.random()*(count+1));
					s[r].innerHTML = intval.toString();
					
					k=Math.floor(Math.random()*(count+1));
					while(r==k)
					{
						k=Math.floor(Math.random()*(count+1));
					}
					s[k].innerHTML = intval.toString();
				}	
			}
		}
	}
	count = 0;
	for(var i = 0;i<height;i++)
	{
		for(var j=0;j<width;j++)
		{
			if(myTable.rows[i].cells[j].innerHTML !="")
			{
				count++;
				break;
			}
		}
		if(count!=0)
		{
			break;
		}
	}
	if(count==0)
	{
		for(var i = 0;i<height;i++)
		{
			myTable.deleteRow(0);
		}
		document.getElementById('score').rows[0].deleteCell(1);
		document.querySelector("#ok").style.backgroundColor = "";
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if(isMobile){
			document.querySelector(".share").style.display = "block";
			document.getElementById("sharetext").href="whatsapp://send?text=I am challenging you to cross the score of "+val1.toString()+" in "+val2.toString()+" steps. https://gkamesh98.github.io/fragmention/";
		}
		var val1 = document.getElementById("score").rows[0].cells[0].innerHTML;
		var val2 = document.getElementById("score").rows[0].cells[1].innerHTML;
		
	}
	else{
		changecolor();
	}
}
function how(){
	document.querySelector(".origin").style.display="none";
	document.querySelector(".howto").style.display="block";
	return false;
}
function clos(){
	document.querySelector(".origin").style.display="block";
	document.querySelector(".howto").style.display="none";
}