




export default async function handler(req, res) {

    if( req.method === "GET"){
        try {


        } catch (error) {
            res.status(404).json(error.message)
        }
    }

    if( req.method === "POST"){
        try {

        } catch (error) {
            res.json(error.message)
        }
    }
    
  }
  








