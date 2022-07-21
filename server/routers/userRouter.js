const router=require("express").Router()

const models=require("../models/users")

router.get('/api/user',models.getuser)
module.exports={userRouter:router}
