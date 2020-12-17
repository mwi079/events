const url='http://localhost:3001'

export function getTopics() {
  return fetchRequest(url);    
}

export function postTopic() {
  return fetchRequest(url,{
    method:'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify()
  });
}

export function deleteTopic (id) {
  return fetchRequest(`${url}/${id}`,{
    method: 'DELETE'
  })
}

export function updateTopic (id,direction) {
  return fetchRequest(`${url}/${id}`,{
    method:'PUT'
  })
}


function fetchRequest(url,options) {
  return fetch(url)
    .then(result=>result.status<400? result:Promise.reject(result))
    .then(result=>result.status!==204? result.json(): result)
    .then(result=> {
      console.log(result)
      return result
    })
}