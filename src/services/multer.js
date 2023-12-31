import multer from "multer";

export const HME=(err, req, res, next)=>{
    if(err){
        return res.status(400).json({message:"multer error", error :err.stack})
    } else {
        next()
    }
}




function fileUpload(){
    const storage = multer.diskStorage({})
    function fileFilter(req, file, cb){
        if(file.mimetype=='image/jpeg' || file.mimetype=='image/jpg' || file.mimetype=='image/png' || file.mimetype=='image/gif'){
            return cb(null, true);
        } else {
            cb('invalid format', false);
        }
    }
    const upload = multer({fileFilter,storage})
    return upload;
}
export default fileUpload;