import * as Yup from "yup";

// 🚨 Login Validation Schema  🚨
export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),

    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters").matches(/[a-z]/, "Password must contain at least one lowercase letter").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/\d/, "Password must contain at least one number").matches(/[@$!%*?&]/, "Password must contain at least one special character"),

    remember: Yup.boolean().oneOf([true], "You must agree to be remembered")
});

// 🚨 Signup Validation Schema  🚨
export const SignupValidation = Yup.object().shape({
    fullname: Yup.string().required("Full name is required").min(3, "Full name must be at least 3 characters").max(50, "Full name must be less than 50 characters"),

    email: Yup.string().required("Email is required").email("Invalid email format"),

    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters").matches(/[a-z]/, "Password must contain at least one lowercase letter").matches(/[A-Z]/, "Password must contain at least one uppercase letter").matches(/\d/, "Password must contain at least one number").matches(/[@$!%*?&]/, "Password must contain at least one special character"),
    profile: Yup.mixed().required("Avatar is required").test("fileSize", "File is too large (Max 2MB)", (value) => {
        return value && value.size <= 2 * 1024 * 1024;
    }).test("fileType", "Unsupported file format", (value) => {
        return(value && ["image/jpeg", "image/png", "image/webp"].includes(value.type));
    }),
    remember: Yup.boolean().oneOf([true], "You must agree to be remembered")
});

// 🚨 Forgot Password Validation Schema  🚨
export const ForgotPasswordValidation = Yup.object().shape({email: Yup.string().email("Invalid email address").required("Email is required")})
