document.addEventListener('DOMContentloaded', function(){

//standard timeout function
setTimeout(function(){
    console.log("callback!");
},1000);


//this nested functions are considered callback hell  
  
setTimeout(function(){
  console.log("one");
    setTimeout(function(){
      console.log("two");
        setTimeout(function(){
          console.log("three");
      },1000);
    },1000);
},1000);
  

  
//this way can experiance the problems as callback hell  
  
function one(cb){
  console.log("one");
  setTimeout(cb, 1000);
}
function two(cb) {
  console.log("two");
  setTimeout(cb, 1000);
}
  function three(cb) {
  console.log("three");
  setTimeout(cb, 1000);
}
  
  one(function(){
    two(three);
  });
  
  
 //inversions of control solved in a different way than callbacks
  
  //Separate Callbacks makes inversion of control worse
  
  function trySomething(ok, err){
    setTimeout(function(){
      var num = Math.random();
      if (num > 0.5){ ok(num);}
      else err(num);
    }, 1000);
  
  }
trySomething(
    function(num){
        console.log('Success: ' + num);
    },
  function(num){
      console.log("Sorry: " + num);
  }
);
  

  //Error-First style  
  
  
 function trySomething(cb){
    setTimeout(function(){
      var num = Math.random();
      if (num > 0.5){ cb(null,num);}
      else cb("Too low!");
    }, 1000);
  
  } 
  
  
  trySomething(function(err,num){
      if (err){
          console.log(err);
      }
    else {
        console.log("Number: " + num);
    }
    
  
  
  }
);
  
//nested-callback tasks
  
  function getData(d, cb){
    setTimeout(function(){cb(d);},1000);
  }
  
  getData(10,function(num1) {
    var x = 1 + num1;
    getData(30, function(num2) {
      var y = 1 + num2;
      getData(
          "Meaning of life: " + (x + y),
        function(answer) {
            console.log(answer);
            // Meaning of life: 42
        });
      
    });
  
  });
  
  
  
  
  
  
});