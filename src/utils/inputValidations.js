import * as yup from 'yup';

export const validateRegistration = (values) => {
    const errors = {};
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const usernameRegex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
    
    return errors;
};


export const loginFormValidations = yup.object().shape({
   email: yup.string().email("Ce n'est pas un format d'e-mail valide!").required("Obligatoire!"),
   password: yup.string().min(8, "Doit contenir au moins 8 caractères").matches(/^(?=.*[a-z])/, 'Doit contenir au moins un caractère minuscule').matches(/^(?=.*[A-Z])/, "Doit contenir au moins un caractère majuscule").matches(1, 'Doit contenir au moins un chiffre').matches(/^(?=.*[0-9])/, "Doit contenir au moins un chiffre").matches(/^(?=.*[!@#%&])/, "Doit contenir au moins un caractère spécial").required("Obligatoire!"),
});


export const forgotPasswordFormValidations = yup.object().shape({
   email: yup.string().email("Ce n'est pas un format d'e-mail valide!").required("Obligatoire!"),
});

export const registerFormValidations = yup.object().shape({
   first_name: yup.string().min(3, "Doit comporter au moins 3 caractères").required("Obligatoire!"),
   last_name: yup.string().min(3, "Doit comporter au moins 3 caractères").required("Obligatoire!"),
   email: yup.string().email("Ce n'est pas un format d'e-mail valide!").required("Obligatoire!"),
   phone_number: yup.string().required("Obligatoire!"),
   gender: yup.string().required("Obligatoire!"),
   country: yup.string().required("Obligatoire!"),
   password: yup.string().min(8, "Doit contenir au moins 8 caractères").matches(/^(?=.*[a-z])/, 'Doit contenir au moins un caractère minuscule').matches(/^(?=.*[A-Z])/, "Doit contenir au moins un caractère majuscule").matches(1, 'Doit contenir au moins un chiffre').matches(/^(?=.*[0-9])/, "Doit contenir au moins un chiffre").matches(/^(?=.*[!@#%&])/, "Doit contenir au moins un caractère spécial").required("Obligatoire!"),
   confirm_password: yup.string().oneOf([yup.ref('password'), null], "La confirmation du mot de passe ne correspond pas au mot de passe").required("Obligatoire!"),
});

export const resetPasswordFormValidations = yup.object().shape({
   password: yup.string().min(8, "Doit contenir au moins 8 caractères").matches(/^(?=.*[a-z])/, 'Doit contenir au moins un caractère minuscule').matches(/^(?=.*[A-Z])/, "Doit contenir au moins un caractère majuscule").matches(1, 'Doit contenir au moins un chiffre').matches(/^(?=.*[0-9])/, "Doit contenir au moins un chiffre").matches(/^(?=.*[!@#%&])/, "Doit contenir au moins un caractère spécial").required("Obligatoire!"),
   confirm_password: yup.string().oneOf([yup.ref('password'), null], "La confirmation du mot de passe ne correspond pas au mot de passe").required("Obligatoire!"),
});

export const courseFormValidations = yup.object().shape({
   name: yup.string().min(3, "Doit comporter au moins 3 caractères").required("Obligatoire!"),
   description: yup.string().min(10, "Doit comporter au moins 10 caractères").max(142, "Trop long").required("Obligatoire!"),
   amount: yup.number().positive().required("Obligatoire!"),
});

export const addcourseFormValidations = yup.object().shape({
   name: yup.string().min(3, "Doit comporter au moins 3 caractères").required("Obligatoire!"),
   description: yup.string().min(10, "Doit comporter au moins 10 caractères").max(142, "Trop long").required("Obligatoire!"),
   amount: yup.number().positive().required("Obligatoire!"),
   resource_description: yup.string().min(10, "Doit comporter au moins 10 caractères").max(142, "Trop long").required("Obligatoire!"),
});

export const editcourseResourceFormValidations = yup.object().shape({
   resource_description: yup.string().min(10, "Doit comporter au moins 10 caractères").max(142, "Trop long").required("Obligatoire!"),
});

export const moduleaddFormValidations = yup.object().shape({
   title: yup.string().min(3, "Doit comporter au moins 3 caractères").required("Obligatoire!"),
});


 
 