import http from "http"
import App from "./app"
import { Logger } from "./logger/logger"
import * as dotenv from "dotenv"
dotenv.config()

const port = 3080

App.set("port", port)
const server = http.createServer(App)
const logger = new Logger()
server.listen(port)


server.on("listening", function(): void {
    const addr = server.address()
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`
    logger.info(`Listening on ${bind}`)
 })

module.exports = App