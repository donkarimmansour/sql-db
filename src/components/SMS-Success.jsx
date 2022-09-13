import { BiCheck } from 'react-icons/bi';

export default function SuccessSMS({ message }) {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5'>
                {message} <BiCheck size={22} color={'rgb(95,195,95)'} />
            </div>
        </div>
    )
}