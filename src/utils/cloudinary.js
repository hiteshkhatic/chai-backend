import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from "fs"
    // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_NAME, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
    
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // trying to upload the file on the cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file has been uploaded succesfullu 
        console.log("file is uploded on cloudinary ", response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        // Remove the locally saved temporary file as the upload operation got failed ! 
        return null;
    }
}
 

export {uploadOnCloudinary}