import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import authenticateToken from "../middleware/auth.js";
import CourseController from "../Controllers/CorseController.js";

const router = Router();


// Get Requests
router.get('/courselist', CourseController.allCourse)
// router.get('/token', authenticateToken ,UserController.verifyUserByToken)
// router.get("/recipes", RecipeController.allRecipe)


// Post Requests
router.post('/signup', UserController.Signup)
router.post('/login', UserController.Login)
router.post('/course/add', CourseController.addCourse)
// router.post('/recipe/update', authenticateToken, RecipeController.updateRecipe)
// router.post('/recipe/readall', authenticateToken, RecipeController.getOneUserRecipes)
// router.post('/recipe/delete', authenticateToken, RecipeController.deleteRecipe)

export default router;
