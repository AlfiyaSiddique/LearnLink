import CourseModel from "../models/Course.js"

/**
 * @route {POST} /api/recipe/add
 * @description Add a REcipe to database
 * @access private
 */

const addCourse = async (req, res)=>{
  try{ 
        const newRecipe =  new CourseModel(req.body)
        await newRecipe.save()
        return res.status(200).json({success: true, message: "Course Added Successfully"})
  }catch(error){
    console.log(error);
    res.status(404).json({ success: false, message: "Internal server error" });
  }
}

/**
 * @route {POST} /api/recipes
 * @description Returns all recipes in result
 * @access public
 */
const allCourse = async (req,res)=>{
   try{
     const courses = await CourseModel.find({});
     return res.status(200).json({success: true, courses})
   }catch(error){
    console.log(error);
    res.status(404).json({ success: false, message: "Internal server error" });
  }
}

/**
 * @POST /api/recipes/readall
 * @description Returns recipe created by an User
 * @access private
 */
const getOneCourse = async (req, res)=>{
  try{
    const recipes = await CourseModel.find({user: req.body.id});
    return res.status(200).json({success: true, recipes})
  }catch(error){
   console.log(error);
   res.status(404).json({ success: false, message: "Internal server error" });
  }
}

const CourseController = {
    addCourse,
    allCourse,
    getOneCourse,
}

export default CourseController
