const express = require('express')
const app = express()

const port = process.env.port | 9000

app.use(express.json())


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);  
})