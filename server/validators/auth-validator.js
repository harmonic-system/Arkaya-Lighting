const { z } = require("zod");

// Creating an object schema
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
        .min(5, { message: "Email must be at least of 5 characters" })
        .max(30, { message: "Email must not be more than 30 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least of 10 characters" })
        .max(10, { message: "Phone must not be more than 10 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(5, { message: "Password must be at least of 5 characters" })
        .max(20, "Password can't be greater than 20 characters"),
    confirmPassword: z
        .string({ required_error: "Password is required" })
        .min(5, { message: "Password must be at least of 5 characters" })
        .max(20, "Password can't be greater than 20 characters"),
});

module.exports = signupSchema; 