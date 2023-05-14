




export default async function handler(req, res) {
    
    if( req.method === "GET"){
        try {
            res.json("Hello getters")
        } catch (error) {
            res.status(404).json(error.message)
        }
    }

    if( req.method === "POST"){
        const data = req.body
        res.json(data)
    }
    
  }
  








