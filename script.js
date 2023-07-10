var hours = document.querySelectorAll("#hours")[0];
var minumts = document.querySelectorAll("#minuts")[0];
var seconds = document.querySelectorAll("#seconds")[0];
var miliseconds = document.querySelectorAll("#miliseconds")[0];



var hrs = 0;
var mints = 0;
var sec = 0;
var milisec = 0;

function start(){
     milisec++;
miliseconds.innerHTML=milisec;

    if(milisec===100){
       milisec=0;
    //    sec++;
        seconds.innerHTML = sec++;
    }

    if(sec===60){
        sec=0;
        // mints++;
        minumts.innerHTML = mints++;
    }  

    if(mints ===60){ 
        mints = 0;
        // hrs++;
        hours.innerHTML = hrs++;
    }

    if(hrs===24){
        hrs = 0;
    }



if(sec<10){
    seconds.innerHTML= '0'+sec;

}

if(mints<10){
    minumts.innerHTML= '0'+mints;
}


if(hrs<10){
    hours.innerHTML= '0'+hrs;
}

}

var rfsInterval;

function startTimer(){
    if(rfsInterval){
        pause();
    }
    rfsInterval = setInterval(start,10)
}



function pause(){
    clearInterval(rfsInterval);       
}


function reset(){
    hours.innerHTML = '00';
    minumts.innerHTML = '00';
    seconds.innerHTML = '00';
    miliseconds.innerHTML = '00';

       hrs = 0;
       mints = 0;
      sec = 0;
      milisec = 0;
      pause()
}












var days = ["sunday" , 'monday' , 'teusday' , 'wednesday' , 'thursday' , 'friday' , 'satarday'];
var months = ['january' , 'febuary' , 'march' , 'april' , 'may' , 'june' , 'july' , 'auguest' , 'september' , 'october' , 'november' , 'december'];

var d = new Date ();
/* var thapa = d.toLocaleTimeString();
console.log(thapa); */
var getDay = d.getDay();
var getDayName = days[getDay];
var getYear = d.getFullYear();
var getMonth = d.getMonth();
var getMonthName = months[getMonth];
var fullYearDisplay = getDayName + "," + getYear + "," + getMonthName ;
// console.log(fullYearDisplay);







// var m = 0;
// var s = 0;
// function startTimer(){
//     console.log(m + " : " + s);
//     s++;
//     if(s===60){
//         s= 0;
//         m++;
//     }
//     if(m === 2){
//         clearInterval(timerRef);
//     }
// }

// var timerRef = setInterval(startTimer, 1000);



// // var hours = document.querySelectorAll(".hrs")[0];
// // var mints = document.querySelectorAll(".min")[0];
// // var seconds = document.querySelectorAll(".sec")[0];
// // var milisec = document.querySelectorAll(".ms")[0];
// var container = document.querySelectorAll(".container")[0];

// var ms = 0;
// var sec = 0;
// var min = 0;
// var hrs = 0;


// function startTimer(){
// // console.log(ms);
    
// container.innerHTML = ms;
//     if(ms===60){
//         sec+1
//         ;

//     }

//     // if(sec===60){
//     //     min++;
//     //     container.innerHTML = sec;

//     // }

//     // if(min===60){
//     //     hrs++;
//     //     container.innerHTML = min;

//     // }


//     // if(hrs===24){
//     //     hrs=0;
//     //     container.innerHTML = hrs;

//     // }

// } 


// function timerCall(){

//     setInterval(startTimer , 100);
// }


