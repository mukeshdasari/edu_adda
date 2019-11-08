
const router = app => {        
    app.get('/hello', async (req, res) => {
        res.send('Hello World from get api')
    })
    
    app.post("/hello", async (req, res) =>{
        res.send("Hello World from post api")
    })
}
module.exports = router;

