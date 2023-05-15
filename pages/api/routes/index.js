import prisma from "@/lib/prisma"


export default async function handler(req, res) {

    if( req.method === "GET"){
        try {


        } catch (error) {
            res.status(404).json(error.message)
        }
    }

    if( req.method === "POST"){
        const {name,age } = req.body
        try {
            const newTester = await prisma.tester.create({
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
  








