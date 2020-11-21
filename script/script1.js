function fn()
{
    var u1=document.getElementById("text1").value;
  var p1=document.getElementById("text2").value;
  var u2="shabina";
  var p2="1234";
  if((u1==u2)&&(p1==p2))
  {
  window.location.assign("index2.html");
  }
  else
  {
    alert("invalid");
  }
}