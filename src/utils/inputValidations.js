export const validateRegistration = (values) => {
    const errors = {};
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const usernameRegex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
    if(!values.first_name){
        errors.first_name = "First Name is required"
    }else if(!usernameRegex.test(values.first_name)){
      errors.first_name = "First name not Valide"
    }
    if(!values.last_name){
        errors.last_name = "Last Name is required!"
    }else if(!usernameRegex.test(values.last_name)){
      errors.last_name = "Last name not Valide"
    }
    if(!values.email){
        errors.email = "Email is required!"
    }else if(!emailRegex.test(values.email)){
      errors.email = "This is not a valide email"
    }
    if(!values.phone_number){
        errors.phone_number = "Phone number is required!"
    }else if(values.phone_number.length < 9 || values.phone_number.length > 12){
        errors.phone_number = "Phone number not Valide"
      }
    if(!values.gender){
        errors.gender = "Gender is required!"
    }
    if(!values.country){
        errors.country = "Country is required!"
    }
    if(!values.address){
        errors.address = "Address is required"
    }else if(!usernameRegex.test(values.address)){
      errors.address = "Address is not Valide"
    }
    if(!values.skill){
        errors.skill = "Skill is required"
    }else if(!usernameRegex.test(values.skill)){
      errors.skill = "Skill is not Valide!"
    }
    if(!values.educational_level){
        errors.educational_level = "Your educational level is required!"
    }else if(!usernameRegex.test(values.educational_level)){
      errors.educational_level = "Educational level not Valide"
    }
    if(!values.page_name){
       errors.page_name = "Page name is required!"
    }else if(!usernameRegex.test(values.page_name)){
       errors.page_name = "Page name is not Valide"
    }
    if(!values.page_title){
       errors.page_title = "Page title is required!"
    }else if(!usernameRegex.test(values.page_title)){
       errors.page_title = "Page title is not Valide"
    }
    if(!values.carousel_one_text){
       errors.carousel_one_text = "Carousel text is required!"
    }else if(!usernameRegex.test(values.carousel_one_text)){
       errors.carousel_one_text = "Invalide text"
    }
    if(!values.carousel_two_text){
       errors.carousel_two_text = "Carousel text is required!"
    }else if(!usernameRegex.test(values.carousel_two_text)){
       errors.carousel_two_text = "Invalide text"
    }
    if(!values.carousel_three_text){
       errors.carousel_three_text = "Carousel text is required!"
    }else if(!usernameRegex.test(values.carousel_three_text)){
       errors.carousel_three_text = "Invalide text"
    }
    if(!values.carousel_one_image){
       errors.carousel_one_image = "Carousel image is required!"
    }
    if(!values.carousel_two_image){
       errors.carousel_two_image = "Carousel image is required!"
    }
    if(!values.carousel_three_image){
       errors.carousel_three_image = "Carousel image is required!"
    }
    if(!values.section_image){
       errors.section_image = "Section image is required!"
    }
    if(!values.video_file){
       errors.video_file = "Video file is required!"
    }
    if(!values.text_heading){
       errors.text_heading = "Text heading is required"
    }else if(!usernameRegex.test(values.text_heading)){
       errors.text_heading = "Text heading not Valide"
    }
    if(!values.section_text){
       errors.section_text = "Section text is required!"
    }else if(!usernameRegex.test(values.section_text)){
       errors.section_text = "Section text not Valide"
    }
    if(!values.password){
        errors.password = "Password is required!"
    }else if(!passwordRegex.test(values.password)){
      errors.password = "Password must have a minimum of 8 characters, at least one lowercase, one uppercase, one number, and one special character"
    }
    if(!values.confirm_password){
        errors.confirm_password = "Confirm password is required!"
    }else if(values.password != values.confirm_password){
      errors.confirm_password = "Confirm password does not match password"
    }
    return errors;
};


