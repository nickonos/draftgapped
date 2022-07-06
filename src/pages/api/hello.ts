import {NextApiRequest, NextApiResponse} from "next";

export default function Handle(
    req : NextApiRequest, res :NextApiResponse
) {
    res.status(200).json({"Hello" : "Worlds"})
}