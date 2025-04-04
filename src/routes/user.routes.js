import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changCurrentPassword,
  getCurrentUser,
  updateAccoutdetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

rotuer.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT, changCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
rotuer.route("/update-account").patch(verifyJWT, updateAccoutdetails)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/coverimage").patch(verifyJWT, upload.single("/coverimage"), updateUserCoverImage)
rotuer.route("/c/:username").get(verifyJWT, getUserChannelProfile)
rotuer.route("/history").get(verifyJWT, getWatchHistory)
export default router;
