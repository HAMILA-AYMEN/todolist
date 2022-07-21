const {connection}=require("../database/config")
module.exports={
    getuser:((req,res)=>{
        const query="select*from mylist "
        connection.query(query,(err,result)=>{
            err?res.status(500).send(err):res.status(200).send(result)
        }
        )
    }
    )
}