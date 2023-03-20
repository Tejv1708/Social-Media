import express from "express" ;
import {
    getuser,
    getUserFriends ,
    getRemoveFriends,
} from "../controllers/user.js" ;
import {verifyToken} from "../middleware/auth.js";

const router = express.Router() ;

// READ 
router.get("/:id" , verifyToken , getuser);
router.get("/:id/friends", verifyToken , getUserFriends);

// UPDATE 
router.patch("/:id:friends", verifyToken , addRemoveFriends);