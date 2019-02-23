function pair(){
var arrEmpt=["rehemafaith01", "dmontetproff", "mainamurage21", "kingkgdave", "danolago", " newtontush", "aisajemila", "ck.caleb17", "lilowesh.lw", "machoguabednego6", " dicksonparlmaom", " cmmaina", " jonesmwas35", "doktatech2", "alexomaset711", "mugambi117", "reesalumasa", "javanmega0", "willgenuis15", "orukopius8", "mnzinga888", "njuguna13", "johnvictor0002", "kephraim19", "iankajiji", "bjnzivu", "leahgakii74", "jlmukono", "husseinfuaad", "marshalldennis27", "wambitafana", "judyrop97", "dorismtae", "kibetkirui010", "asmaahmed.adan", "anthony.ahere", "hopemutheu", "adhoadhigal", "badrubadri92", "eugenesakwasaudababs00", "eric.kingoo2014", "agnesndutamwaniki", "misedaalex", "teenahshyro", "amiredi", "collinskipkemoi24", "emmaKibore", "amiinegal3"];
var output="";
for(i=0;i<24;i++){
var randomW=Math.floor(Math.random()*arrEmpt.length);
arrEmpt[randomW];
var pairOne=arrEmpt.splice(randomW,1)
var random=Math.floor(Math.random()*arrEmpt.length);
arrEmpt[random];
var pairTwo=arrEmpt.splice(random,1);

document.getElementById('pa').innerHTML=pairOne+"  vs  "+pairTwo;
//document.write("<br>"+pairOne+" vs "+pairTwo);
output=output+"<br> \n "+pairOne+" vs "+pairTwo;
}
document.getElementById('pa').innerHTML=output;
var keya=[];
var newKey=keya.push(output);

}
pair();
$(document).ready(function(){
  $("button").click(function(){
      $(".show").slideDown(2000);
      $(".show").show();
  })
});
