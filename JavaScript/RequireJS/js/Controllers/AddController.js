// JavaScript Document
define(['Views/AddView', 'Models/User'], function(AddView, User){
 
    function start(){
        AddView.render();
        bindEvents();       
    }
     
    function bindEvents(){
        document.getElementById('add').addEventListener('click', function(){
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            /*Without Router
			require(['Controllers/ListController'], function(ListController){
                ListController.start();
            });*/
			
			//With Router
			window.location.hash = '#list';
        }, false);
    }
 
    return {
        start:start
    };
});