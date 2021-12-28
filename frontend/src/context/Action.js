export const loginStart = (userCredentials) => ({
    type: "login_start",
})

export const LoginSuccess = (user) => ({
    type :"login_success",
    payload: user,
});

export const LoginFailure = ()=>({
    type: "login_failure"
});

export const Logout = () => ({
    type: "logout",
})

export const UpdateStart = (userCredentials) => ({
    type: "update_start",
})

export const UpdateSuccess = (user) => ({
    type :"update_success",
    payload: user,
});

export const UpdateFailure = ()=>({
    type: "update_failure"
});