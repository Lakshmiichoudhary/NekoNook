const bcrypt = require("bcryptjs");
const Admin = require("../models/admin-model"); 

const salt = 10;

exports.createAdmin = async () => {
    try {
        const adminExists = await Admin.findOne({ email: process.env.ADMIN });
        if (adminExists) {
            //console.log("Admin already exists.");
            return;
        }

        const adminId = process.env.ADMIN;
        const adminPassword = process.env.ADMINPASSWORD;

        if (!adminId || !adminPassword) {
            //console.error("Admin email or password is not set in environment variables.");
            return;
        }
        const hashedPassword = await bcrypt.hash(adminPassword, salt); 
        const admin = new Admin({
            name: 'Lakshmi',
            email: adminId,
            password: hashedPassword,
        });

        await admin.save();
        //console.log("Admin created successfully.");
    } catch (error) {
        console.error("Error creating admin:", error);
    } 
};

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).send("Admin not found");
        }

        const isPasswordCorrect = await bcrypt.compare(password, admin.password);
        if (!isPasswordCorrect) {
            return res.status(400).send("Invalid credentials");
        }

        res.status(200).json({ message: "Login successful", user: admin });
    } catch (error) {
        res.status(500).send("Server error");
    }
};
