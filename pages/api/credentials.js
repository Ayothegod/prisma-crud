import prisma from "@/lib/prisma"


export default async function handler(req, res) {

    if( req.method === "POST"){
        const {name,age } = req.body
        try {
            const newTester = await prisma.User.create({
                data:{
                    name:name,
                    age:age
                }
            })
            res.json(newTester)
        } catch (error) {
            res.json(error.message)
        }
    }
    
  }