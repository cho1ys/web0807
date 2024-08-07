import User from "../model/userModel.js";

export const create = async (req, res)=> {
  try {
    const userData = new User(req. body);
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "already exists" });
    }
    const saveUser = await userData.save();
    res.status(200).json({ saveUser });
  } catch (e) {
    res.status(500).json({ e: "연결 실패" });
  }
}
export const read = async(req,res)=>{
    try{
        const users = await User.find()
        if(users.length === 0){
            return res.status(404).json({message:'Not Found'})
        }
        res.status(200).json(users)
    }catch(e){
        res.status(500).json({e:'server error'})
    }
}

export const update = async(req,res)=>{
    try{
        const id = req.params.id
        const userExist = await User.findOne({_id : id})
        if(!userExist){
            return res.status(404).json({message : 'Not Found'})
        }
        const updateUser = await User.findByIdAndDelete(id,req.body,{
            new: true
        })
        res.status(200).json(updateUser)
    }catch(e){
        res.status(500).json({e:'server error'})
    }
}
export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id
        const userExist = await User.findOne({_id : id})
        if(!userExist){
            return res.status(404).json({message : 'Not Found'})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({message: '삭제!'})
    }catch(e){
        res.status(500).json({e:'server error'})
    }
}
