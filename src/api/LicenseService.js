export async function saveLicense(request) {
  return await fetch("http://localhost:8080/license", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({
      dorso: request.dorso,
      frente: request.frente,
      user_id: request.user_id
    })
  }).then(response => {
    return response.json();
  });
}

export async function getLicense(id) {
  return await fetch("http://localhost:8080/license?user_id=" + id).then(
    response => {
      return response.json();
    }
  );
}

export async function updateLicense(request) {
  return await fetch("http://localhost:8080/license/" + request.id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({
      dorso: request.dorso,
      frente: request.frente,
      user_id: request.user_id
    })
  }).then(response => {
    return response.json();
  });
}
