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


  // THings to remember
/*  !true =  false;
  !false = true;
  !undefined = true;  */