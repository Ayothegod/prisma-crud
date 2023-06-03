import prisma from "@/db/prisma"

// const Pool = require("pg").Pool
// const pool = new Pool({
//     user:"postgres",
//     password:"Ayo1234$$Ayo",
//     host:"db.ztoijqejifmeyrdwnjql.supabase.co",
//     port:5432,
//     database:"postgres"
// })

export default async function handler(req, res) {
    try {
        const data = await prisma.data.findMany()
        // const data = await pool.query("SELECT * FROM data")
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error.message)
    }
}