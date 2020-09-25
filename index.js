
// var a = new Date();
// var currentYear= a.getFullYear();
// var yroption= " < option value='0'> </option>";
// function createYearOption(){
//     for( var i= 1900;i<= currentYear;i++){
//     yroption += " < option value='year'>year</option>";
// }
// document.getElementById("years").innerHTML = yroption ;
// }


function akanName(){
var birthday= document.getElementById('birthday').value;
// alert(birthday);
var a=new Date(birthday);
var weekday=a.getDay();
var femaleNames=['Akosua','Adwoa',' Abenaa','Akua','Yaa',' Afua','Ama'];
var maleNames=['Kwasi','Kwadwo','Kwabena',' Kwaku','Yaw','Kofi',' Kwame'];
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// var gender=['female','male'];
var gender=document.querySelector('input[id="gender"]:checked').value;
// alert(gender);
// var gender= document.getElementById('gender');
var male=document.getElementById(male);
    if(birthday===''){
        alert("Please Enter your birthday!");
        // break;
    }
    else{
   if (gender=='female'){
       var day= days[weekday];
       var name=femaleNames[weekday];
    //    alert(name);
        document.getElementById("answer").innerHTML= "<span><i class=\"fa fa-female\"></i></span>Born on a <span>" + day+ "</span>, Your Akan Name is <span>" + name + "</span>";;
    }
    else{
        var day=days[weekday];
       var name=maleNames[weekday];

        // alert(name);
        document.getElementById('answer').innerHTML= "<span><i class=\"fa fa-male\"></i></span>Born on a <span>" + day + "</span>, Your Akan Name is <span>" + name + "</span>";;
    }
}
}
// document.write(akanName());

