// Add your code here

function submitData (name,email){
  return fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
           name,
           email
        })
    })
    .then(response=>response.json())
    .then(obj=> document.querySelector('body').append(obj.id))
    .catch(function(error){
        alert('Unauthorized Access')
        document.querySelector('body').append(error)

    })
    

}