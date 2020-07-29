var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
    var a=[];
 var tranformEmployeeList = {};
 for(i=0;i<arr.length;i++){
     var arr2=arr[i];
     for(var j=0;j<arr2.length;j++){
         var arr3=arr2[j];
         for(k=0;k<arr3.length;k++){
             if(k==0){
                 var name=arr3[k];
             }
             else{
                tranformEmployeeList[name]=arr3[k];
             }
         }
     }
     a.push(tranformEmployeeList);
 }
 console.log(a);
}

transformEmployeeData(arr);