const jsonServer = require('json-server')


// servercreate

const parKingServer = jsonServer.create()

// middleware

const middleware = jsonServer.defaults()

// path to store data
const router =jsonServer.router('par-king.json')
parKingServer.use(middleware)
parKingServer.use(router) 



// port for the server
const PORT = 4000 || process.env.PORT



parKingServer.listen(PORT,()=>{
    console.log(`server running succesfully at port number ${PORT}`);
    
})




