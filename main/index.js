const app = require('./src/app');
require('dotenv').config(); 
const port = process.env.PORT||8080;

console.log(port)


app.listen(port,()=>{
    console.log(`server is live on port ${port}`)
})