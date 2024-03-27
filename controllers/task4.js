
const secureApi=(req,res)=>{

    try {

        res.status(200).json({message:"Welcome to secure api"})
        
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

module.exports={secureApi}