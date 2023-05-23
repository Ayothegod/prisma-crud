import prisma from "@/lib/prisma"


export default async function handler(req, res) {

    if( req.method === "DELETE"){
        try {
            // await prisma.Post.deleteMany()
            const {id} = req.params
            const deletePost = await prisma.Post.delete({
                where:{
                    id:id
                }
            })
            res.json(deletePost)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }
    
  }
  