import { Link } from 'react-router-dom'
import { Remove } from './removeUserInfo'
import { UseGetContext } from '../context/AuthProvider'

export function Navbar() {

    const { data } = UseGetContext()
    const getDataFromLocalStorage = localStorage.getItem('data')

    return (
        <header className='absolute w-full flex justify-end items-center py-2.5 px-6 z-30'>
            <nav className='flex items-center bg-white px-2 py-1.5 rounded'>
                <Link className='font-light' to={"/"}>Home</Link>
                <div className='w-6 h-0.5 rotate-90 bg-black/20' />
                <Link className='font-light' to={"/dashboard"}>Dashboard</Link>

                {(data || getDataFromLocalStorage) && <>
                    <div className='w-6 h-0.5 rotate-90 bg-black/20' />
                    <button onClick={Remove} className='border px-2 py-1.5 text-sm rounded border-zinc-900 hover:bg-zinc-900 hover:text-white'>Remove Data</button>
                </>}
            </nav>
        </header>
    )
}
