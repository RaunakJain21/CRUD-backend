
const Todo= require('../models/Todo');

exports.deleteTodo=async (req, res)=>{
   try{ const id= req.params.id;
    // const {title,description}=req.body;
  await Todo.findByIdAndDelete({_id:id});

    res.status(200).json({
        // data: data,
        success:true,
        message:"deleted succesfully"

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