import { Link } from "react-router-dom"
import { UseGetContext, UserProps } from "../context/AuthProvider"

function Dashboard() {
    const { data } = UseGetContext()

    const userData = localStorage.getItem('data')

    if (!data && userData) {

        const parsedUserData = JSON.parse(userData) as UserProps

        return (
            <div className="min-h-screen flex items-center justify-center">
                <pre className="text-xs">
                    {JSON.stringify(parsedUserData, null, 4)}
                </pre>
            </div>
        )
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <pre className="text-xs">
                {data ? (
                    JSON.stringify(data, null, 4)
                ) : (
                    <>
                        <h1>Sem dados</h1>
                        <Link to={"/"} className="text-blue-400 hover:underline">Buscar Dados</Link>
                    </>
                )}
            </pre>
        </div>
    )
}

export default Dashboard