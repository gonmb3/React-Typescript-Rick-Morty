import * as yup from "yup"

export const LoginVlidate = yup.object().shape({
    name: yup.string().trim().required("El email es requerido").min(4, "Minimo deber ser de 4 caracteres").max(20, "Maximo 20 caracteres"),
    password: yup.string().trim().required("La contraseña es requerida").min(4, "Minimo deber ser de 4 caracteres").max(20, "Maximo 20 caracteres"),
})