const http = require('http')
const PORT = 3000 ; 

const server = http.createServer((req,res)=>{
    res.write('<h1>Hello Node !!!</h1>')
})

server.listen(PORT, function(error){
    if(error){
    console.log("Something went wrong",error);
    }else{
    console.log('Server is listening on port',PORT)
    }
})