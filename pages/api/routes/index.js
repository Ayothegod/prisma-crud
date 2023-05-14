




export default function handler(req, res) {
    
    if( req.method === "GET"){
        res.json("Hello getters")
    }

    if( req.method === "POST"){
        const data = req.body
        res.json(data)
    }
    
  }
  








