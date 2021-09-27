const userDetail = [{
    id:101,
    name:'Yaji'
},
{
    id:102,
    name:'Eliza'
}]
const getUserById = (id) =>{
    // FIND USER BY FILTER
   const newUserArray = userDetail.filter((user,index)=>{
        console.log(userDetail);
        return user.id === id;
    })  

    //FIND USER BY FOR OF 
 /*   let findUser = null;
    for(const user of userDetail){
        if(user.id === id){
            findUser = user;
        }
        console.log(findUser);
    } */


    
}
getUserById(1);