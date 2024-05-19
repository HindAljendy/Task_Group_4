export const API = {
    GET: {
        projects: "http://127.0.0.1:8000/api/projects",
        messages: "http://127.0.0.1:8000/api/message",
        userprofile: "http://127.0.0.1:8000/api/auth/user-profile",
    },
    POST: {
        login: "http://127.0.0.1:8000/api/auth/login",
        logout: "http://127.0.0.1:8000/api/auth/login",
        refresh: "http://127.0.0.1:8000/api/auth/refresh",
        newproject: "http://127.0.0.1:8000/api/projects",
        addmessage: "http://127.0.0.1:8000/api/message",
    },
    DELETE: {
        projects: "http://127.0.0.1:8000/api/projects",
        message: "http://127.0.0.1:8000/api/message/",
    }
}