const User = require('../model/user')


exports.addUser = (req,res)=>{
    const {name,email} = req.body
    const user = new User({name,email})
    user.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json(data)
    })
}

exports.GetUser = (req,res)=>{
    User.find({})
    .exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json(data)
    })
}

exports.singleUser = (req,res)=>{
    const {id} = req.body
    User.findOne({_id:id})
    .exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json(data)
    })
}

exports.delUser = (req,res)=>{
    const {id} = req.body
    User.findByIdAndRemove({_id:id})
    .exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({
            message:"user is now removed!"
        })
    })
}

