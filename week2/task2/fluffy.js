var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   //Add ht weight to fluffy
   cat.height="40cm";
   cat.weight="30kg";
  

   //Changing name to Fluffyy
   cat.name="Fluffyy";

   //Listing catfriend activities
   for(var i=0;i<2;i++){
    console.log(cat.catFriends[i].activities);
   }
  
  //Lisitng catfriend names
  for(var i=0;i<2;i++){
    console.log(cat.catFriends[i].name);
   }

  //Total weight of catfriends
   var sum=0;
   for(var i=0;i<2;i++){
       sum+=cat.catFriends[i].weight;
   }
   console.log(sum);


  //Print total activities
  console.log(cat.activities);
  for(var i=0;i<2;i++){
    console.log(cat.catFriends[i].activities);
   }

   //Adding activities to catfriends
   for(var i=0;i<2;i++){
    cat.catFriends[i].activities.push("Evil");  //CAn be viewed only with JSONStringify
   }
  
   //Updating bar fur color
   cat.catFriends[0].furcolor="black";
 

   //Overall JSON display
   console.log(cat);