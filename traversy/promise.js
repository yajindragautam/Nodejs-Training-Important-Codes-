console.log("callback in working");
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post One", body: "This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

getPost();

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const err = false;
      if (!err) {
        resolve();
      } else {
        reject("ERROR: Something went wrong");
      }
    }),
      2000;
  });
}
// .then() - use to catch resolve data and .cath() - use to catch error  in the PROMISE
createPost({ title: "Post Three", body: "This is post three" })
  .then(getPost)
  .catch((err) => console.log(err));

  // IF you have multiple PROMISE use Promise.all()

  const Promise1 = Promise.resolve('Hi Yajindra');
  const Promise2 = 10;
  const Promise3 = new Promise((resolve,reject)=>{
      setTimeout((resolve,2000,'Goodbye'))
  });
  const Promise4 = fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((res)=> res.json())
  .then((resolve)=> console.log(resolve));

  Promise.all([Promise1,Promise2,Promise3,Promise4])
  .then((result)=> console.log(result))