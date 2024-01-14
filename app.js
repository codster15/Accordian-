
// var first = ` Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
// all levels and ideal for portfolio building.`;



// var minus = document.querySelector(".minus")

// var perform = function (){
//      minus = document.querySelector(".minus").innerHTML = first;
//      console.log("clicked");

// }

// // minus.addEventListener("click", perform);
    var plusSvg = ` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`;

    var minusSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;

        var firstpara = `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`

    var fillSecondAns = ` Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
    option providing access to a range of projects suitable for all skill levels.`;

    var thirdAns = ` Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
    way to showcase your skills to potential employers!`

var fouthAns = `  The best place to get help is inside Frontend Mentor's Discord community. There's a help 
channel where you can ask questions and seek support from other community members. --`



var flag1 = false;


//       ---------------------------------------       1 function
var hidepara = function (){
    
    if(flag1){
        hideAll();
        document.querySelector(".firstpara").style.display = "none";
        var minus = document.querySelector(".minus").innerHTML = plusSvg;

        //second question hide
        document.querySelector(".fillSecondAns").style.display = "none" ;
        flag1  = false;
        console.log(" flag1 if -false  - -------------- 1 function ")
    }else{
        hideAll();
        document.querySelector(".firstpara").innerHTML = firstpara;
        document.querySelector(".firstpara").style.display = "block" ;
        var minus = document.querySelector(".minus").innerHTML = minusSvg;

        makeFalse();
       
        flag1 = true;
        console.log(" flag1 else -true - -------------- 1 function");
        
     
    }




}

    //       ---------------------------------------       2 function
    var flag = false;
var secondquestion  = function ( ){
    if(flag){
        hideAll();
        document.querySelector(".minus2").innerHTML = plusSvg;
        document.querySelector(".fillSecondAns").style.display = "none" ;

      
       
        flag  = false;
        console.log(" flag if -false  - -------------- 2 function ")
     
    }else{
        hideAll();
        document.querySelector(".fillSecondAns").innerHTML = fillSecondAns;
        document.querySelector(".fillSecondAns").style.display = "block" ;
        document.querySelector(".minus2").innerHTML = minusSvg;
       


        
        makeFalse();
        flag  = true;
        console.log(" flag else -true  - -------------- 2 function ")
        
    }



}


    //       ---------------------------------------       3 function
var flag2 = false;
var thirdquestion = function (){
    if(flag2){
        hideAll();
        document.querySelector(".minus3").innerHTML = plusSvg;
        document.querySelector(".fillthirdAns").style.display = "none" ;
        flag2 =false;
        console.log("from if --- true ---------------function  3")
    }else{
        hideAll();
        document.querySelector(".fillthirdAns").innerHTML = thirdAns;
        document.querySelector(".fillthirdAns").style.display = "block" ;
        document.querySelector(".minus3").innerHTML = minusSvg;

        makeFalse();
        flag2 =true;
       console.log("from else --- true ---------------function  3")
      
    }
}


    //       ---------------------------------------       4 function
var flag3 = false;
var fourthquestion = function (){

    if(flag3){
        hideAll();
        document.querySelector(".minus4").innerHTML = plusSvg;
        document.querySelector(".fourthAns").style.display = "none"

        flag3 = false;
        console.log("from if --- false ---------------function  4")
    
    }else{
        hideAll();

       
     
        console.log("from else --- true ---------------function  4")


        document.querySelector(".minus4").innerHTML = minusSvg;
        document.querySelector(".fourthAns").innerHTML = fouthAns;
        document.querySelector(".fourthAns").style.display = "block"

        makeFalse();
        flag3 = true;
    }
}





var hideAll = function (){
    document.querySelector(".firstpara").style.display = "none";
    document.querySelector(".fillSecondAns").style.display = "none" ;
    document.querySelector(".fillthirdAns").style.display = "none" ;
    document.querySelector(".fourthAns").style.display = "none"

    document.querySelector(".minus").innerHTML = plusSvg;
    document.querySelector(".minus2").innerHTML = plusSvg;
    document.querySelector(".minus3").innerHTML = plusSvg;
    document.querySelector(".minus4").innerHTML = plusSvg;

}

var makeFalse = function(){
    flag  = false;
    flag1  = false;
    flag2  = false;
    flag3  = false;
  
}