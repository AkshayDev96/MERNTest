const express = require('express')
const router = express.Router()

const {addUser,GetUser,singleUser,delUser} = require('../controller/user')

router.post("/addUser",addUser)
router.get("/users",GetUser)
router.get("/user",singleUser)
router.delete("/users",delUser)

module.exports = router
