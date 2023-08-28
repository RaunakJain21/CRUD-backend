
const Todo= require('../models/Todo');

exports.Updatetodo=async (req, res)=>{
   try{ const id= req.params.id;
    const {title,description}=req.body;
    const data = await Todo.findByIdAndUpdate({_id:id},{title,description});

    res.status(200).json({
        data: data,
        success:true,
        message:"updated succesfully"

    });
}
catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
        success:false,
        data:"internal error",
        message:err.message
    })
}

}