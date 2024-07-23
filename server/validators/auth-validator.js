const { z } = require("zod");

// Creating an object schema for signup
const signupSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters" })
        .max(20, { message: "Name must not be more than 20 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(30, { message: "Email must not be more than 30 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be of 10 characters" })
        .max(10, { message: "Phone must be of 10 characters" }),
    organization: z
        .string()
        .trim(),
    password: z
        .string({ required_error: "Password is required" })
        .min(5, { message: "Password must be at least of 5 characters" })
        .max(30, { message: "Password can't be greater than 30 characters" }),
    confirmPassword: z
        .string({ required_error: "Confirm Password is required" })
        .min(5, { message: " Confirm Password must be at least of 5 characters" })
        .max(30, { message: " Confirm Password can't be greater than 30 characters" }),
});

// Creating an object schema for login
const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(30, { message: "Email must not be more than 30 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(5, { message: "Password must be at least of 5 characters" })
        .max(30, { message: "Password can't be greater than 30 characters" }),
});

module.exports = { signupSchema, loginSchema }; 