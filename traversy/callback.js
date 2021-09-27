console.log('callback in working')
const posts =[
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post One', body: 'This is post two'}
]

function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output +=  `<li>${posts.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

getPost();
