document.getElementById('btn').addEventListener('click', function(e){
    e.preventDefault();
    const number = document.getElementById('joke-inp').value;
     
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(data){
                    output += `
                    <li>${data.joke}</li>
                    `;
                });
            }
            document.querySelector('.jokes-output').innerHTML = output;
        }
    }

    xhr.send();
    
});