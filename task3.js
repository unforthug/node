const http = require('http')
const fs = require('fs');
const Port = 5000 

const server = http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type' : 'text/txt'})
   fs.readFile('./welcome.txt' , function(error,data){
    if(error){
     res.writeHead(404)
     res.write('Error : File not found')
    }else{
    res.write(data)
    }
    res.end()
   })
})

server.listen(Port, function(error){
    if(error){
        console.log('Something went wrong')
    }else{
        console.log('Server is listening on port',Port)
    }
})