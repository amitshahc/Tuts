//Note: 
//1.	.prototype method is used to add new global variable/function to the existing function
//		it will not overwrite the pre defined property if exists.
//2. 	public variable needs to be declare with (this.var)

/*--------------------------------------
Nested function scope
Invalid call
---------------------------------------*/
//function init() { //OR 
init = function(){
    var name =  "Amit";
        
	function displayName()
	//displayName = function () {
        alert (name);    
    };
};

init.prototype.name = "jumpu"; // will change the (public) this.name = "jumpu" but not the (private) var <name>.
								// there is no (public) var <name> is defined so it will create new.
obj = new init();
console.log(obj.name);	// will print "jumpu" as it will return the (public) variable
obj.displayName();	// xxx CAN NOT be called, as the displayName() is (private) function inside init(), only can be called within the init()



/*--------------------------------------
Nested function scope
Valid call
---------------------------------------*/
//function init() { //OR 
init = function(){
    var name =  "Amit";
    	
	this.displayName = function () {
        alert (name);    
    };
};

init.prototype.name = "jumpu"; // will change the (public) this.name = "jumpu" but not the (private) var <name>
obj = new init();
console.log(obj.name);	// will print "jumpu" as it will return the (public) variable
obj.displayName();	// CAN be called, as the displayName() is (public) function inside init() 
					//	will Return "Amit" not "jumpu"
					


					
/*--------------------------------------
Nested function scope
Valid call
---------------------------------------*/
//function init() { //OR 
init = function(){
    this.name =  "Amit";
    	
	this.displayName = function () {
        alert (name);    
    };
};

init.prototype.name = "jumpu"; // will not over write the (public) this.name = "Amit" 
obj = new init();
console.log(obj.name);	// will print "Amit" as it is not over written using .prototype 
obj.displayName();	// CAN be called, as the displayName() is (public) function inside init() 
					//	will Return "Amit" not "jumpu"
					
					
					

					
					
/*--------------------------------------
Nested function scope
overwriting variable with prototype not working
---------------------------------------*/
					
//function init() { //OR 
init = function(){
    this.name =  "Amit";
    	
	this.displayName = function () {
        alert (name);//there is no private var like <name>     
    }
};

init.prototype.name = "jumpu"; // will not overwrite the (public) variable <name> as already defined
obj = new init();
console.log(obj.name);// OUTPUT = "Amit"
obj.displayName();	// output = "result" invalid

					

					
/*--------------------------------------
Nested function scope
overwriting variable with prototype not working
---------------------------------------*/
					
//function init() { //OR 
init = function(){
    this.name =  "Amit";
    	
	this.displayName = function () {
        alert (this.name);//will use global   
    }
};

init.prototype.name = "jumpu"; // will not overwrite the variable <name>
obj = new init();
console.log(obj.name);// OUTPUT = "Amit"
obj.displayName();	// output = "Amit" valid



/*--------------------------------------
Nested function scope
overwriting variable with object working
---------------------------------------*/

//function init() { //OR 
init = function(){
    this.name =  "Amit";
    	
	this.displayName = function () {
        alert (this.name);        
    }
};

init.prototype.name = "jumpu"; 	// will not work
obj = new init();
obj.name = "dimpu";		//will over write the this.name (public) variable
console.log(obj.name);	//output = "dimpu"
obj.displayName();		//output = "dimpu"










/*--------------------------------------
Nested function scope
invalid call using return
---------------------------------------*/

//function init() { //OR 
init = function(){
    var name = "private";
    
	this.displayName = function () {//public function
        alert (name);        
    }
    
    return{        
        displayName: displayName	//mapping private function displayName
    }
};

//init.prototype.name = "jumpu"; 
obj = new init();
obj.name = "dimpu";
console.log(obj.name);
obj.displayName();	//not accessible as displayName() is public 


/*--------------------------------------
Nested function scope
valid call using return
---------------------------------------*/

function init() { //OR 
//init = function(){    
    var name = "private";
    
	this.displayName = function () {	//public function
        alert (name);        
    }
    
    return{
        displayName: this.displayName	//mapping public function displayName
    }
};

obj = new init();
obj.name = "dimpu";
console.log(obj.name); // output = "dimpu" because it changes the (public)
obj.displayName();	// output = "private"	(points to private)

