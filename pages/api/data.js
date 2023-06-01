// import prisma from "@/db/prisma"

export default async function handler(req, res) {
    try {
        const data = [
            {
            id:"1234uwyuwe78weu",
            name:"Ayo",
            email:"ayomie@gmail.com"
        },
            {
            id:"1234uwyuksdjksdio89we78weu",
            name:"Brother",
            email:"Brother@gmail.com"
        },
    ]
        // console.log(data);
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error.message)
    }
}