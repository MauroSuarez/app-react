export async function saveUser(request){
    return await fetch(
        "http://localhost:8080/users",
        {
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'same-origin',
            body:JSON.stringify({
                username:request.username,
                pass:request.password,
                email:request.email
            })
        }
    ).then(response =>{
        return response.json();
    })
}

export async function getUser(request){
    return await fetch(
        "http://localhost:8080/users?username="+request.username+"&pass="+request.password
    ).then(response =>{
        return response.json();
      }
    )
}
