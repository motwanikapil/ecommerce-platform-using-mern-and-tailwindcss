const http = require("http")
const app = require("./app")
const PORT = process.env.PORT

http.createServer(app).listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
