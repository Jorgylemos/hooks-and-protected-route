import { useEffect } from "react";
import { UseGetContext } from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom'

export function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const { data } = UseGetContext()
    const navigate = useNavigate()
    const userLocalData = localStorage.getItem('data')

    useEffect(() => {
        if (data || userLocalData) {
            return
        }
        if (!data || !userLocalData) {
            // alert("Você não pode entrar nesta rota, voce precisa ter buscado um usuário.")
            navigate('/')
        }
    }, [data, userLocalData, navigate])

    return (
        <>
            {children}
        </>
    )
}