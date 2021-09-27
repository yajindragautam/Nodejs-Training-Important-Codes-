const getHelloPermise = (throwError) => {
  return new Promise((resolve, reject) => {
    //reject("There are some error!");
    setTimeout(()=>{
        if(!throwError){
            resolve('Hi Yajindra')
        }
        else{
            reject('Error')
        }
    })
    resolve("We find what you are searching..");
  });
  // return Promise.resolve(['Yaji','Eliza'])
};

// If Promise -- SUCCISSED
getHelloPermise(true)
  .then((result) => {
    console.log(result);
    return "Hi Yajindra";
  })
  .then((result) => console.log(result)) // If Promise -- REJECTED
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("Request Completed"));

  // IMPORTANT - Promise.all() and Promise.race()
let promise1 = () => new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Promise 1');
  },2000)
});

let promise2 = () => new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Promise 2');
  },2000)
});


Promise.all([promise1(),promise2()]).then((result)=>{
  console.log('Promise all: ', result);
})
.catch((err)=>{
  console.log('Error : ', err);
}); 


  // THings to remember
/*  !true =  false;
  !false = true;
  !undefined = true;   */


