import { useCallback, } from 'react'
import { ShippingForm } from '../components/FormUser'
import { UseGetContext, UserProps } from '../context/AuthProvider'

function Home() {

    const { user, data, setData } = UseGetContext()

    // const [data, setData] = useState()

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`https://api.github.com/users/${user}`, {
            method: 'GET'
        })

        const data = await res.json()

        setData(data)
    }, [user, setData])

    const userData = localStorage.getItem('data')

    if (!data && userData) {

        const parsedUserData = JSON.parse(userData) as UserProps

        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center">
                <ShippingForm data={userData} handleSubmit={handleSubmit} />

                <pre className="text-xs font-bold bg-gradient-to-r bg-clip-text text-transparent from-red-400 to-violet-500">
                    {JSON.stringify(parsedUserData, null, 4)}
                </pre>
            </div>
        )
    }
    return (
        <main className='relative bg-slate-100 z-0 min-h-screen flex flex-col justify-center items-center'>
            <ShippingForm data={data} handleSubmit={handleSubmit} />

            <pre className='text-xs font-bold bg-gradient-to-r bg-clip-text text-transparent from-red-400 to-violet-500'>
                {data && JSON.stringify(data, null, 4)}
            </pre>

        </main>
    )
}

export default Home
