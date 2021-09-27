function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     /* const error = true;
      if (!error) {
        console.log("Function: Your promise has been resolved");
        resolve();
      } else {
        console.log("Function: Your promise has not been rejected");
        reject("Sorry not fulfilled");
      }*/
      resolve('Function: Your promise has been resolved');
    }, 2000);
  });
}

func1()
  .then((result) => console.log("Yaji: Thanks for resolving "+ + result))
  .catch((err) => console.log("Yaji: Very bad bro :" + err));

func1();
