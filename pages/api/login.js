
const login = async () => {

    fetch('/.netlify/functions/readme-login', {
      method: 'POST',
      body: 'query'
    }).then((res) => res.text()).then((res) => {
      return res;
    })
    .catch((err) => {
        console.log(err);
    });
}

export default login;