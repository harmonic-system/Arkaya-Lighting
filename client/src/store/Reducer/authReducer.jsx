const authReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_TOKEN":
            return {
                ...state,
                isAuthenticated: !!action.payload.token,
                token: action.payload.token
            };

        case "AUTH_LOADING":
            return {
                ...state,
                loading: true,
            };

        case "SIGNUP":
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                loading: false,
                error: null,
            };

        case "SIGNUP_ERROR":
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                loading: false,
                error: action.payload,
            };

        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                loading: false,
                error: null,
            };

        case "LOGIN_ERROR":
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                loading: false,
                error: action.payload,
            };

        case "LOAD_USER_DATA":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.data,
                loading: false,
                error: null,
            };

        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
            };

        default:
            return state;
    }
}

export default authReducer