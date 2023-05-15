import prisma from "@/lib/prisma"


export default async function handler(req, res) {

    if( req.method === "GET"){
        try {
            const allUsers = await prisma.tester.findMany()
            res.json(allUsers)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }

    if( req.method === "POST"){
        const {textArea,id } = req.body
        try {
            const newTester = await prisma.Post.create({
                data:{
                    userId:id,
                    postData:textArea
                }
            })
            res.json(newTester)
        } catch (error) {
            res.json(error.message)
        }
    }
    
  }
  








