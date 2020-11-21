function fn1()
    {
    var u1=document.getElementById("u1").value;
    var e1=document.getElementById("e1").value;
    var pas1=document.getElementById("pas1").value;
    var pas2=document.getElementById("pas2").value;
    if(u1=="")
    {
        alert("enter username");
    }
    else if(e1=="")
    {
        alert("enter email");
    }
    else if(pas1=="")
    {
        alert("enter password");
    }
    else if(pas1.length<8)
    {
        alert("password should contain atleast 8 characters"); 
    } 
    else if(pas2=="")
    {
        alert("confirm password");
    }
    else if(pas1!=pas2)
    {
        
        alert("enter correct password");
    }
   else
    {
        window.location.assign("index1.html");
    }
    }