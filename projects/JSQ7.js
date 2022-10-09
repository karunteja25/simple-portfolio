var uid=document.Registration.userid;
var pass=document.Registration.password;
var name=document.Registration.name;
var address=document.Registration.address;
var country=document.Registration.country;
var zip=document.Registration.zip;
var email=document.Registration.email;
var sex=document.Registration.sex;
var language=document.Registration.language;
var desc=document.Registration.desc;
var submit=document.Registration.submit;

function returnformValidation(){
if(uid_valid(uid))
{
    if(pass_valid(pass))
    {
        if(name_valid(name))
        {
            if(add_valid(add))
            {
                if(country_valid(country))
                {
                    if(zip_valid(zip))
                    {
                        if(email_valid(email))
                        {
                            if(sex_valid(sex))
                            {

                            }
                        }
                    }
                }
            }
        }
    }
}return false;
}

function uid_valid(uid)
{
    var uidlen=uid.value.length;
    if(uidlen==0 || uidlen<5 || uidlen>12)
    {
        document.getElementById("uidmsg").innerHTML="user id must not be empty/mustbe between 5 to 12 charaters";
        uid.focus();
        return false;
    }
    else return true;
}

function pass_valid(pass)
{
    var passlen=pass.value.length;
    if(passlen==0 || passlen<7 || passlen>12)
    {
        alert("password must not be empty/mustbe between 7 to 12 charaters");
        pass.focus();
        return false;
    }
    else return true;
}

function name_valid(name)
{
    var letters=/^[A-Za-z]+$/;
    if(name.value.match(letters))
    {
       return true;
    }
    else { alert("name must not be empty/mustbe alphaabets only");
    name.focus();
    return false;}
}

function add_valid(add)
{
    var letters=/^[0-9A-Za-z]+$/;
    if(add.value.match(letters))
    {
       return true;
    }
    else {alert("address must be mustbe alphaabets and numerics only");
    add.focus();
    return false;}
}

function country_valid(country)
{

    if(country.value == "Default")
    {
        alert("select country");
        country.focus();
        return false;
    }
    else return true;
}

function zip_valid(zip)
{
    var letters=/^[A-Za-z]+$/;
    if(zip.value.match(letters) )
    {
        alert("zip code must be numerics only");
        zip.focus();
        return false;
    }
    else return true;
}
function email_valid(email)
{
    var emaillen=email.value.length
    if(emaillen== 0 )
    {
        alert("email must not be empty");
        email.focus();
        return false;
    }
    else return true;
}

function sex_valid(sex)
{
    var gender=document.getElementsByName("sex");
    if(gender[0].checked == true || gender[1].checked == true)
    {
        return true;
    }
    else
    {
        alert("must select gender");
        sex.focus();
        return false;
    }
}