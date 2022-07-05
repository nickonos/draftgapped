import {Server} from "socket.io";
import {NextApiRequest, NextApiResponse} from "next";

let server : Server | undefined = undefined

export default function SocketHandler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    if (server !== undefined){
        console.log("Socket is running")
    }else{
        console.log("Socket init")
        server = new Server()

        server.on('connection', socket => {

        })
    }
    res.end()
}