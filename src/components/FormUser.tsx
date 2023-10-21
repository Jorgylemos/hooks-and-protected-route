import { memo } from 'react'
import { UseGetContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom'

export const ShippingForm = memo(function GETForm({ handleSubmit, data }: { handleSubmit: (data: any) => void, data: any }) {

    const { setUser } = UseGetContext()

    return (
        <>
            <form onSubmit={handleSubmit} className='fixed bg-black/20 min-h-screen w-full flex flex-col justify-center items-center gap-2'>
                <input type="text" className='py-1 text-center outline-none border-2 border-zinc-800 rounded' onChange={(e: any) => setUser(e.target.value)} placeholder='Procurar por usuário...' />
                <button type='submit' className='py-1 px-4 bg-zinc-800 rounded-md text-white'>Clique</button>
                {data && <Link to={"/dashboard"} className='border bg-zinc-800 text-white py-1 px-4 rounded'>Ir para dashboard</Link>}
            </form>
        </>
    )
})
