/*--------------------------------------
function variable scope 
 ---------------------------------------*/
 
init = function () {
	var name =  "Amit";			//Private
    function displayName() {	//Private
        alert (name);    
    }
    //displayName();    
  
  return{						//Public
		name:name,  
		displayName:displayName
	};
};

init = init();
console.log(init.name);
init.displayName();

/*--------------------------------------
 Object variable scope
 ---------------------------------------*/
 
init = {
    name: "Amit",				//Public
    displayName: function () {	//Public
        alert (this.name);    
    }    
};

console.log(init.name);
init.displayName();

/*--------------------------------------
with "new" : need to create instance 
 ---------------------------------------*/
var counter =  function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
};

counter = new counter();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1




/*--------------------------------------
without "new" : initiate at define time
---------------------------------------*/
var counter = new function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
};

//counter = new counter();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1




/*--------------------------------------
without "new" : self inwalked function 
---------------------------------------*/
var counter =  (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

//counter = new counter();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


/*--------------------------------------
Prototype: add variable/methods
---------------------------------------*/

function init() {
    var name =  "Amit";    //Private 
    this.name = name;    //Public
  
    function displayName() {
        alert (name);    
    }
}

init.prototype.surName = "Shah";
init.prototype.getFullName = function(){
    return this.fullname =  this.name+' '+this.surName;
}

objInit = new init();
console.log(objInit.getFullName());
console.log(objInit.fullname);


/*--------------------------------------
Prototype: add variable/methods
Error: declaring "return" will not work
---------------------------------------*/
function init() {
    var name =  "Amit";    //Private 
    this.name = name;    //Public
  
    function displayName() {
        alert (name);    
    }
    
    return{
    }
}

init.prototype.surName = "Shah";
init.prototype.getFullName = function(){
    return this.fullname =  this.name+' '+this.surName;
}

objInit = new init();
console.log(objInit.getFullName());
console.log(objInit.fullname);

/*--------------------------------------
Prototype: add variable/methods
Pass: declaring "return" with all possible properties inside it
---------------------------------------*/

function init() {
    var name =  "Amit";    //Private 
    this.name = name;    //Public
  
    function displayName() {
        alert (name);    
    }
    
    return{
        name: this.name,
        surName: this.surName,
        getFullName: this.getFullName,
        fullname: this.fullname
    }
}

init.prototype.surName = "Shah";
init.prototype.getFullName = function(){
    return this.fullname =  this.name+' '+this.surName;
}

objInit = new init();
console.log(objInit.getFullName());
console.log(objInit.fullname);

/*--------------------------------------
function that returns a function (default returned function)
After initiating the outer main function will return the inner function 
---------------------------------------*/

function celebrityName (firstName) {    
    var nameIntro = "This celebrity is ";
    function lastName (theLastName) {        
        return nameIntro + firstName + " " + theLastName;    
    }
    function mlastName (theLastName, mtheLastName) {        
        return nameIntro + firstName + " " + theLastName + " " +mtheLastName;    
    }
    return lastName;
}
var mjName = celebrityName ("Michael"); //will return mjName = lastName
document.writeln(mjName ("Jackson")); 	//lastName ("Jackson")
