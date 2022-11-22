const boredAPI = async () =>
  fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(res => res)

export default boredAPI
