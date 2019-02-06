const loginUsername = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')
const loginBtn = document.getElementById('login-submit')
/******
 * NOTE: we need to actaully send the backend live if we want this to work
 * Have to make api call to live backend 
 * 
 ******/

async function signUserIn() {
  form = document.getElementById('auth-form');
  const data = new FormData(form);
  const res = await fetch('/api/auth/sign-in', {
    method: 'post',
    body: data,
  });
  console.log(res.j);
}


/***********
 * 
 * Below is the frontend logic for the INDEX Page.
 * The following functions will...
 * 1. make API Call 
 * 2. Return data and append it into html
 * 3. 
 */

 async function getArt() {
   // Url for backend
   const url = 'https://squilla-api.herokuapp.com';
  
    //  fetching the art from the API
   const artRes = await fetch(`${url}/api/art`)
   const art = await artRes.json();
    /// what is this reponse??
   console.log(art);


 }

 /****
  * 
  * NEXT:
  * need to fix CORS with backend so request will go through.
  * Then do the To-dos listed above
  */

 getArt();