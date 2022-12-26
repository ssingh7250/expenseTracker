var arr =[1,2,3,4,5];
  var min = 99999999;
  var max = -99999999;
for(var i=0;i<arr.length;i++){
   if(arr[i]>max)  max = arr[i];
   
}

for(var i=0;i<arr.length;i++){
    if(arr[i]<min)  min = arr[i];
    
 }

 console.log(`Minimum is ${min} and maximum is ${max}`);

