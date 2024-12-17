import jwt from "jsonwebtoken";
import { userSchema } from "../models/users";
import { societyRegSchema } from "../models/societyReg";

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

// http://localhost:8000/api/societyRegister
const societyRegister = (req: any, res: any) => {
  const { name, email, phone_number, district, institution_name, societies } =
    req.body;

  if (
    !name ||
    !email ||
    !phone_number ||
    !district ||
    !institution_name ||
    !societies
  ) {
    return res.status(400).json({
      message:
        "'name', 'email', 'phone_number', 'district', 'institution_name' and 'societies' are required",
    });
  }

  if (!Array.isArray(societies) || societies.length === 0) {
    return res
      .status(400)
      .json({ message: "At least one society must be selected" });
  }

  societyRegSchema
    .findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res
          .status(409)
          .json({ message: "User in society with this email already exists" });
      }

      const newUser = new societyRegSchema({
        name,
        email,
        phone_number,
        district,
        institution_name,
        societies,
      });

      newUser
        .save()
        .then((savedUser) => {
          res.status(201).json({
            message: "User registered in society successfully",
            userId: savedUser._id,
            userName: savedUser.name,
            societies: savedUser.societies,
          });
        })
        .catch((error) => {
          console.error("Error saving user in society:", error);
          res
            .status(500)
            .json({ message: "Server error while saving user in society" });
        });
    })
    .catch((error) => {
      console.error("Error finding user in society:", error);
      res.status(500).json({ message: "Server error" });
    });
};

export default registerUser;

export { registerUser, loginUser, societyRegister };
