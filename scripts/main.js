//Create the XHR Object
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
// xhr.open('GET', 'https://api.github.com/users', true)
xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
//call the onload 
var out = "";
xhr.onload = function(){
    //check if the status is 200(means everything is okay)
    if (this.status === 200){
        //return server response as an object with JSON.parse
        out = JSON.parse(this.responseText);
        var names =[] ;
        for (var x in out){
            names.push(out[x]["employee_name"]);
        }
        document.write(names);
        console.log(out);
        console.log(names);
    }   
};
//call send
xhr.send();

