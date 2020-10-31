var resul= document.querySelector("#result")
function insertnum(number){
    var neew= document.querySelector("#result").value  ;
    document.querySelector("#result").value= neew+number;
};
function clearall(){ 
    
    document.querySelector("#result").value=" ";
}; 
function deletnum (){
    var yo=document.querySelector("#result").value.slice( 0,-1);
    document.querySelector("#result").value=yo;
};

function finalresult(){
    var reesul=eval(document.querySelector("#result").value) ;
    document.querySelector("#result").value=reesul;
};
function absul(){
    var bal= document.querySelector("#result").value;
    if(bal>0){
        document.querySelector("#result").value="-"+bal;
    }else{
        document.querySelector("#result").value= Math.abs(bal);
    }
};
 