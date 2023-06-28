export const authProvider = {
    //вызывается, когда пользователь заходит в систему
    login: ({ username }) => {
        localStorage.setItem("userName", username);
        //записывает в localStorage логин и пароль 
        return Promise.resolve();
    },
    // вызывается, когда пользователь нажимает на кнопку выхода
    logout: () => {
        localStorage.removeItem("userName");
        //localStorage зачищает данные
        return Promise.resolve();
    },
    // вызывается для обработки ошибки от API
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("userName");
            return Promise.reject();
        }
        return Promise.resolve();
    },
   // вызывается для проверки аутентификации, когда пользователь делает переходы
    checkAuth: () => {
        return localStorage.getItem("userName")
            ? Promise.resolve()
            : Promise.reject();
    },
     getPermissions: () => Promise.resolve(),
};