 require(['base/js/namespace', 'base/js/events'], function(IPython, events) {
     events.on('notebook_loaded.Notebook', function() {
        console.log('require & notebook_loaded.Notebook');
        init();
    });
     events.on('app_initialized.NotebookApp', function() {
        console.log('require & app_initialized.NotebookApp');
        init();
     });
 });

 define(['base/js/namespace', 'base/js/events'], function(IPython, events) {
     events.on('notebook_loaded.Notebook', function() {
        console.log('define & notebook_loaded.Notebook');
        init();
    });
     events.on('app_initialized.NotebookApp', function() {
         console.log('define & app_initialized.NotebookApp');
         init();
         
     });
 });
 
 
 require(['base/js/namespace', 'base/js/events'], function(IPython, events) {
	    console.log("A");
	    events.on('app_initialized.NotebookApp', function() {
	        console.log("B");
	    });
	    console.log("C");
	});


define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {

	    console.log("load_ipython_extension()");
        var handler = function () {
            alert('this is an alert from my_extension!');
        };

        var action = {
            icon: 'fa-comment-o', // a font-awesome class used on buttons, etc
            help    : 'Show an alert',
            help_index : 'zz',
            handler : handler
        };
        var prefix = 'my_extension';
        var action_name = 'show-alert';

        var full_action_name = Jupyter.actions.register(action, name, prefix); // returns 'my_extension:show-alert'
        Jupyter.toolbar.add_buttons_group([full_action_name]);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
 
 function init() {
	 alert("here3");
 }
 
 
 console.log("C");
 
 
 /* Single-Tab mode */
 define(['base/js/namespace'], function(Jupyter){
	    Jupyter._target = '_self';
	});
 
 