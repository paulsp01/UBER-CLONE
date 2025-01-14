const http=require('http');
const app=require('./app');
const { initializeSocket } = require('./socket');
const port=process.env.PORT || 8001;

const server=http.createServer(app);
initializeSocket(server);

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

