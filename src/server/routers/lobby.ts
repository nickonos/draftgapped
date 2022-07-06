import {createRouter} from "../createRouter";
import {z} from "zod"

export const lobbyRouter = createRouter()
.query("hello", {
    input: z.string(),
    resolve({ctx, input}){
        return `hello ${input}`
    }
})