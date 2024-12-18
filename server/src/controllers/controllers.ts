import jwt from "jsonwebtoken";
import { userSchema } from "../models/users";
import { societyRegSchema } from "../models/societyReg";

// http://localhost:8000/api/register
const registerUser = async (req: any, res: any) => {
  try {
    const { fullName, email, password, role } = req.body;

    // Validate input
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate role
    if (role && !["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role specified" });
    }

    // Check if the email already exists
    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Set default role to "user" if not provided
    const userRole = role || "user";

    // Create a new user or admin
    const user = new userSchema({
      fullName,
      email,
      password,
      role: userRole,
    });

    // Save the user to the database
    const savedUser = await user.save();
    console.log(`${userRole} registered:`, savedUser);

    // Respond with success
    res.status(201).json({
      message: `${
        userRole === "admin" ? "Admin" : "User"
      } registered successfully`,
      data: {
        id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user or admin" });
  }
};

const getAllUsers = async (req: any, res: any) => {
  try {
    // Fetch all users from the database
    const users = await userSchema.find();

    // Check if no users are found
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Respond with the list of users
    res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
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
        role: user.role,
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
  const { name, email, phoneNumber, district, institution, societies } =
    req.body;

  if (
    !name ||
    !email ||
    !phoneNumber ||
    !district ||
    !institution ||
    !societies
  ) {
    return res.status(400).json({
      message:
        "'name', 'email', 'phoneNumber', 'district', 'institution' and 'societies' are required",
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
        phoneNumber,
        district,
        institution,
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

const getAllSocieties = (req: any, res: any) => {
  societyRegSchema
    .find()
    .then((societies) => {
      if (societies.length === 0) {
        return res.status(404).json({ message: "No societies found" });
      }
      res.status(200).json(societies);
    })
    .catch((error) => {
      console.error("Error fetching societies:", error);
      res
        .status(500)
        .json({ message: "Server error while fetching societies" });
    });
};

export {
  registerUser,
  loginUser,
  societyRegister,
  getAllSocieties,
  getAllUsers,
};
