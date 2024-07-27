export const usernameValidator = (username)=>{
    
    if((/[@$!%*?&#~_-]/.test(username))){
        return {isValid:false, errorMessage: "Cannot use  a special character in the username"}
    }
    if((/[ ]/.test(username))){
        return {isValid:false, errorMessage: "Cannot use  space in the username"}
    }
    return {isValid:true, errorMessage: ""}
}

export const passwordValidator = password =>{
    if(password.length < 6){
        return {isValid:false, errorMessage: "password must be at least 6 characters long"}
    }
    if(!(/[a-z]/.test(password))){
        return {isValid:false, errorMessage: "Must have a Lowercase letter in the password"}
    }
    if(!(/[A-Z]/.test(password))){
        return {isValid:false, errorMessage: "Must have an uppercase letter in the password"}
    }
    if(!(/[@$!%*?&#~_-]/.test(password))){
        return {isValid:false, errorMessage: "Must have a special character in the password"}
    }
    return {isValid:true, errorMessage: ""}
}