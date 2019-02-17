function pair(){
var arrEmpt=["collins","etyang","clive","felix","komar","kerry","norman","mcKanzi","ian","kerr","vwan","khat","mai","owa","mali","wawie"];
var output="";
for(i=0;i<8;i++){
var randomW=Math.floor(Math.random()*arrEmpt.length);
arrEmpt[randomW];
var pairOne=arrEmpt.splice(randomW,1)
var random=Math.floor(Math.random()*arrEmpt.length);
arrEmpt[random];
var pairTwo=arrEmpt.splice(random,1);

document.getElementById('pa').innerHTML=pairOne+" vs "+pairTwo;
//document.write("<br>"+pairOne+" vs "+pairTwo);
output=output+"<br>"+pairOne+" vs "+pairTwo;
}
document.getElementById('pa').innerHTML=output;
var keya=[];
var newKey=keya.push(output);

}
pair();
