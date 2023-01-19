const http = require('http')
const Port = 4000 
const generator = require('generate-password');

const server = http.createServer(function(req,res){
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    
    console.log(password);
    res.end()
})

server.listen(Port,function(error){
    if(error){
        console.log('Something went wrong ! ')
    } else {
        console.log('Server is listening on',Port)
    }
})