import { BiErrorCircle } from 'react-icons/bi';

export default function ErrorSMS({ message }) {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5'>
                {message} &nbsp; <BiErrorCircle size={22} color={'rgb(245,115,115)'} />
            </div>
        </div>
    )
}