export async function getAll(){
    return await fetch(
        "http://localhost:8080/productos"
    ).then(response =>{
        return response.json();
      }
    )
}

export async function deleteProduct(id){
    return await fetch(
        "http://localhost:8080/productos/"+id,
        {
            method:"DELETE",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'same-origin',
        }
    ).then(response =>{
        return response.json();
    })
}

export async function saveProduct(request){
    return await fetch(
        "http://localhost:8080/productos",
        {
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'same-origin',
            body:JSON.stringify({
                descripcion:request.descripcion,
                precio:request.precio,
                categoria:request.categoria,
                cantidad:request.cantidad
            })
        }
    ).then(response =>{
        return response.json();
    })
}

export async function updateProduct(request){
    return await fetch(
        "http://localhost:8080/productos/"+request.id,
        {
            method:"PUT",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'same-origin',
            body:JSON.stringify({
                descripcion:request.descripcion,
                precio:request.precio,
                categoria:request.categoria,
                cantidad:request.cantidad
            })
        }
    ).then(response =>{
        return response.json();
    })
}