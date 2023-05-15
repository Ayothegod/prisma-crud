import prisma from "@/lib/prisma"


export default async function handler(req, res) {

    if( req.method === "POST"){
        const {name,email,password} = req.body
        try {
            const newTester = await prisma.User.create({
                data:{
                    name:name,
                    email:email,
                    password:password
                }
            })
            res.json(newTester)
        } catch (error) {
            res.json(error.message)
        }
    }
    
  }