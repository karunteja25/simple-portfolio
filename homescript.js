var n=document.Form.nameinput;
var e=document.Form.emailinput;
var t=document.Form.textarea;
var submit=document.Form.submit;



function formsubmit()
{
    if(name_valid(n))
    {
        
        if(email_valid(e)){
        
            if(textarea_valid(t))
            {

            }
        }
    }
return false;
}
function name_valid(name)
{
   var namelen=name.value.length
   if(namelen == 0 || namelen<5 || namelen>12)
   {
       document.getElementById("namemsg").innerHTML="name should be between 5 to 12 characters";
       name.focus();
       return false;
   }
   else return true;
}

function email_valid(email)
{
    var emaillen=email.value.length
    if(emaillen== 0 )
    {
        document.getElementById("emailmsg").innerHTML="email must not be empty";
        email.focus();
        return false;
    }
    else return true;
}

function textarea_valid(text)
{
    var txtlen=text.value.length;
    if(txtlen < 10)
    {
        document.getElementById("txtmsg").innerHTML="Please add your Message";
        text.focus();
        return false;
    }
    else return true;
}