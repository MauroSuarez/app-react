export async function saveUserInfo(request) {
  return await fetch("http://localhost:8080/users_info", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({
      name: request.name,
      surName: request.surName,
      dni: request.dni,
      date: request.date,
      street: request.street,
      number: request.number,
      province: request.province,
      localtion: request.localtion,
      cp: request.cp,
      user_id: request.user_id
    })
  }).then(response => {
    return response.json();
  });
}

export async function getUserInfo(id){
    return await fetch(
        "http://localhost:8080/users_info?user_id="+id
    ).then(response =>{
        return response.json();
      }
    )
}


export async function updateUserInfo(request) {
    return await fetch("http://localhost:8080/users_info/"+request.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      body: JSON.stringify({
        name: request.name,
        surName: request.surName,
        dni: request.dni,
        date: request.date,
        street: request.street,
        number: request.number,
        province: request.province,
        localtion: request.localtion,
        cp: request.cp,
        user_id: request.user_id
      })
    }).then(response => {
      return response.json();
    });
  }