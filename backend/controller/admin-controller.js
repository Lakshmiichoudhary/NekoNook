const bcrypt = require("bcryptjs");
const Admin = require("../models/admin-model"); 

const salt = 10;

exports.createAdmin = async () => {
    try {
        const adminExists = await Admin.findOne({ email: 'admin@gmail.com' });
        if (adminExists) {
            console.log("Admin already exists.");
            return;
        }

        const adminpassword = process.env.ADMINPASSWORD
        const hashedPassword = await bcrypt.hash(adminpassword, salt); 
        const admin = new Admin({
            name: 'Lakshmi',
            email: 'admin@gmail.com',
            password: hashedPassword,
        });

        await admin.save();
        console.log("Admin created successfully.");
    } catch (error) {
        console.error("Error creating admin:", error);
    } 
};

