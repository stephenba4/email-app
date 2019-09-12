window.onload=function(){
 
    var submitButton = document.getElementById("submitButton");
  
    submitButton.addEventListener('click', function() {  

        var theEmail = document.getElementById("theEmail").value;
        var theName = document.getElementById("theName").value;
        var obj = JSON.parse('{ "email": "' + theEmail + '", "name":"' + theName + '"}');

        fetch('http://localhost:3000/email', {  
            method: 'POST',  
            headers: {  
              'Content-Type': 'application/json'  
            }, 
            body: JSON.stringify(obj)

        })
        .then(function (data) {  
          console.log('Request success: ', data); 
          window.open("./thankYou.html", "_self");
        })  
        .catch(function (error) {  
          console.log('Request failure: ', error); 
          window.open("./error.html", "_self"); 
        });
    });
};
