export async function saveCars(request) {
  return await fetch("http://localhost:8080/users_cars", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({
      brand: request.brand,
      year: request.year,
      model: request.model,
      version: request.version,
      gnc: request.gnc,
      user_id: request.user_id
    })
  }).then(response => {
    return response.json();
  });
}

export async function getCars(id){
    return await fetch(
        "http://localhost:8080/users_cars?user_id="+id
    ).then(response =>{
        return response.json();
      }
    )
}


export async function getBrands(){
  return await fetch(
      "http://localhost:8080/cars"
  ).then(response =>{
      return response.json();
    }
  )
}


export async function updateCars(request) {
    return await fetch("http://localhost:8080/users_cars/"+request.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      body: JSON.stringify({
        brand: request.brand,
        year: request.year,
        model: request.model,
        version: request.version,
        gnc: request.gnc,
        user_id: request.user_id
      })
    }).then(response => {
      return response.json();
    });
  }