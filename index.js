
// var a = new Date();
// var currentYear= a.getFullYear();
// var yroption= " < option value='0'> </option>";
// function createYearOption(){
//     for( var i= 1900;i<= currentYear;i++){
//     yroption += " < option value='year'>year</option>";
// }
// document.getElementById("years").innerHTML = yroption ;
// }


function akanName() {
    var birthday = document.getElementById('birthday').value;
    // alert(birthday);
    var a = new Date(birthday);
    var weekday = a.getDay();
    var femaleNames = ['Akosua', 'Adwoa', ' Abenaa', 'Akua', 'Yaa', ' Afua', 'Ama'];
    var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', ' Kwaku', 'Yaw', 'Kofi', ' Kwame'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // female pictures variables//
    var imgArray1 = new Array();
    imgArray1[0] = new Image();
    imgArray1[0].src = 'female-pic/sunday.jpg';
    imgArray1[1] = new Image();
    imgArray1[1].src = 'female-pic/monday.jpg';
    imgArray1[2] = new Image();
    imgArray1[2].src = 'female-pic/tuesday.jpg';
    imgArray1[3] = new Image();
    imgArray1[3].src = 'female-pic/wednesday.jpg';
    imgArray1[4] = new Image();
    imgArray1[4].src = 'female-pic/thursday.jpg';
    imgArray1[5] = new Image();
    imgArray1[5].src = 'female-pic/friday.jpg';
    imgArray1[6] = new Image();
    imgArray1[6].src = 'female-pic/saturday.jpg';
    var imgArray1 = new Array();
    imgArray1[0] = new Image();
    imgArray1[0].src = 'female-pic/sunday.jpg';
    //male picture variables//
    imgArray1[1] = new Image();
    imgArray1[1].src = 'male-pic/monday.jpg';
    imgArray1[2] = new Image();
    imgArray1[2].src = 'male-pic/tuesday.jpg';
    imgArray1[3] = new Image();
    imgArray1[3].src = 'male-pic/wednesday.jpg';
    imgArray1[4] = new Image();
    imgArray1[4].src = 'male-pic/thursday.jpg';
    imgArray1[5] = new Image();
    imgArray1[5].src = 'male-pic/friday.jpg';
    imgArray1[6] = new Image();
    imgArray1[6].src = 'male-pic/saturday.jpg';
    // var gender=['female','male'];
    var gender = document.querySelector('input[id="gender"]:checked').value;
    // alert(gender);
    // var gender= document.getElementById('gender');
    var male = document.getElementById(male);
    if (birthday === '') {
        alert("Please Enter your birthday!");
        // break;
    }
    else {
        if (gender == 'female') {
            var day = days[weekday];
            var name = femaleNames[weekday];
            //    var img=imgArray1[weekday];
            //    alert(name);
            // document.getElementById("answer").innerHTML= "<span><i class=\"fa fa-female\"></i></span>Born on a <span>" + day+ "</span>, Your Akan Name is <span>" + name + "</span>";
            //    if(name=femaleNames[0]){
            //        var y=document.querySelector('img[src="female-pic/sunday.jpg"]');
            //        document.getElementById("answer").innerHTML=y;
            //    }
            //  document.getElementById("answer").innerHTML.src= imgArray1[weekday];
            if (weekday == 0) {
                document.getElementById('answer').innerHTML = '<img width=350px, height=320px src="female-pic/sunday.jpg" >';
            }
            else if (weekday == 1) {
                document.getElementById('answer').innerHTML = '<img width=350px, height=320px src="female-pic/monday.jpg" >';

            }
            else if (weekday == 2) {
                document.getElementById('answer').innerHTML = '<img width=400px, height=400px src="female-pic/tuesday.jpg" >';

            }
            else if (weekday == 3) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="female-pic/wednesday.jpg" >';

            }
            else if (weekday == 4) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="female-pic/thursday.jpg" >';

            }
            else if (weekday == 5) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="female-pic/friday.jpg" >';

            }
            else {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="female-pic/saturday.jpg" >';

            }
        }
        else if (gender == 'male') {
            var day = days[weekday];
            var name = maleNames[weekday];
            //  document.getElementById("answer").innerHTML.src= imgArray1[weekday];
            if (weekday == 0) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="male-pic/sunday.jpg" >';
            }
            else if (weekday == 1) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="male-pic/monday.jpg" >';

            }
            else if (weekday == 2) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="male-pic/tuesday.jpg" >';

            }
            else if (weekday == 3) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="male-pic/wednesday.jpg" >';

            }
            else if (weekday == 4) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="male-pic/thursday.jpg" >';

            }
            else if (weekday == 5) {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="male-pic/friday.jpg" >';

            }
            else {
                document.getElementById('answer').innerHTML = '<img width=300px, height=300px src="male-pic/saturday.jpg" >';

                // alert(name);
                // document.getElementById('answer').innerHTML = "<span><i class=\"fa fa-male\"></i></span>Born on a <span>" + day + "</span>, Your Akan Name is <span>" + name + "</span>";
            }
        }
    }
// document.write(akanName());
}
