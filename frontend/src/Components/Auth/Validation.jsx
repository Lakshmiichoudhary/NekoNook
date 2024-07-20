export const Validation = (email,password) => {
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if(!isEmail) return "Enter Valid Email";

    if(password.length < 8) return 'Password must be at least 8 characters long.'

    return null;
}