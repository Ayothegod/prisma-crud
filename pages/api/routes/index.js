import prisma from "@/lib/prisma"


export default async function handler(req, res) {

    if( req.method === "GET"){
        try {
            await prisma.Post.deleteMany()
            const allPosts = await prisma.Post.findMany({
                select: {
                    id: true,
                    userId: true,
                    postData: true,
                    createdAt: true,
                    updatedAt: true,
                    user: {
                      select: {
                        image: true,
                        name: true
                      }
                    },
                    comments: true,
                  }
            })
            res.json(allPosts)
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
  








