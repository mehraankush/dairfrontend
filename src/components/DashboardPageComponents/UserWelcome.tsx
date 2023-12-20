import '@/Styles/Dashboard.scss'

export const UserWelcome = () => {

    return (
        <div className='shadow-1  mt-2 border-round-xl p-3 px-5 bg-white text-black-alpha-70 flex back1 justify-content-between'>
            <div className='w-full'>
                <h1 className='text-xl '>Welcome Back , Akshita</h1>
                <p className='text-xs'>Here is today’s report and performence</p>
            </div>
            <div className='back2 w-full flex justify-content-between'>
                <div className='back2 w-full'></div>
                <div className='back3 w-full flex justify-content-between'>
                    <div className='back4 w-full'></div>
                    <div className='back5 w-full'></div>
                </div>
            </div>
        </div>
    )
}
