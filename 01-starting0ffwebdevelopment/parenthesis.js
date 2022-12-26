var x = "{}[](){";
var x1 =0;
var y1=0;
var z1 =0;

for(let i =0;i<x.length;i++){
    if(x[i]=='{')   x1++;
    else if(x[i]=='(')  y1++;
    else if(x[i]=='[')  z1++;
    else if(x[i]=='}')  x1--;
    else if(x[i]==')')  y1--;
    else if(x[i]==']')  z1--;

}

if(x1==0 && y1==0 && z1==0){
    console.log("true");
}else{
    console.log("false");
}