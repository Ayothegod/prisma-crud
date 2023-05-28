import prisma from "@/db/prisma"

export default async function handler(req, res) {
    try {
        const data = await prisma.data.findMany()
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error.message)
    }
}