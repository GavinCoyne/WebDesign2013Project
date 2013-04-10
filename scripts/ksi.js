function startTime(id)
{
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById(id).innerHTML=h+":"+m+":"+s;
    t=setTimeout(function(){startTime(id)},1000);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function validateFormSubmit()
{
    alert("Success!");
	var Name=document.forms["validationForm"]["FName"].value;
	var Name2=document.forms["validationForm"]["LName"].value;

    var arrayName = new array[20];


    if (Name==null || Name=="")
	{
		alert("First name must be filled out");
		return false;
	}
    if (Name2==null || Name2=="")
    {
        alert("Last name must be filled out");
        return false;
    }

    alert("Success!");


}

function clearImage(){
    document.getElementById("fullImage").innerHTML = "";
}


function loadImage(srcImg, imgName){
    document.getElementById("fullImage").innerHTML =
        "<div class='imgContainer' onclick='clearImage()' >" +
        "<h1>"+imgName+"</h1><br /><img class='fullImageImg' id="+imgName+" style='z-index:21;' src=" + srcImg + " /></div>";


}




