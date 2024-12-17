import jwt from "jsonwebtoken";
import { userSchema } from "../models/users";
// import { lawyerFormSchema } from "../models/register";

// http://localhost:8000/api/register
const registerUser = (req: any, res: any) => {
  const { fullName, email, password, confirm_password } = req.body;

  const user = new userSchema({
    fullName,
    email,
    password,
    confirm_password,
  });

  user
    .save()
    .then((savedUser: any) => {
      console.log("User registered:", savedUser);
      res.json({ message: "User registered successfully", data: savedUser });
    })
    .catch((error: any) => {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Failed to register user" });
    });
};

// http://localhost:8000/api/login
const loginUser = (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: " 'email', 'password' and  are required" });
  }

  userSchema
    .findOne({ email, password })
    .then((user: any) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
      );

      res.json({
        message: "Login successful",
        userId: user._id,
        userName: user.username,
        token,
      });
    })
    .catch((error: any) => {
      console.error("Error finding user:", error);
      res.status(500).json({ message: "Server error" });
    });
};

// // http://localhost:8000/api/register
// const lawyerFormSubmit = (req: any, res: any) => {
//   const {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     cnic,
//     judgeType,
//     caseType,
//     caseDescription,
//   } = req.body;

//   const lawyerData = new lawyerFormSchema({
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     cnic,
//     judgeType,
//     caseType,
//     caseDescription,
//   });

//   lawyerData
//     .save()
//     .then((saveData: any) => {
//       console.log("data submit:", saveData);
//       res.json({ message: "data submit successfully", data: saveData });
//     })
//     .catch((error: any) => {
//       console.error("Error submit data:", error);
//       res.status(500).json({ message: "Failed to submit data" });
//     });
// };
export { registerUser, loginUser };
