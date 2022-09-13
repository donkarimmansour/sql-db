import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addUser, getUser } from '../services/crudHelper';
import { SuccessSMS, ErrorSMS } from '.';
import { BiPlus } from 'react-icons/bi';
import Spinner from './Spinner';
import react ,{ useEffect } from 'react';



// This <Component /> call from 🟨 index.js 🟨
export default function FormAddUser({ formData, setFormData }) {

    const queryClient = useQueryClient();

    // by using this useMutation hook ==> we can create, update, delete data...
    const addMutation = useMutation(addUser, {
        onSuccess: () => {
            queryClient.prefetchQuery(['users'], getUser());
        }
    });

    useEffect(() => {
        addMutation.isLoading = false
        addMutation.isSuccess = false
        addMutation.isError = false
    } , formData)

    /*  
        input value's ==> into Object{ }

        we can get the data from this form,
        when we click on this "add button", 
        so we need to get the data of this input text boxes in the form of {Object},
        so we can pass that {Object} to the backend &
        store that data as a new record in the Database.
    */


    /*  
        get input value's dynamically ==> setFormData() 
        
        by type something inside first name input text box, 
        that is going to call ==> setFormData() function & 
        this setFormData() function is going to create a property called firstName,
        and then it's going to get the value of this input text box 
        and pass that value into firstName property...
        spread operator are going to override the previous value...
    */


    const handleSubmit = (e) => {
        // stop browser to reloading...
        e.preventDefault();

        // prevent user submit empty form data...
        // if (Object.keys(formData).length === 0) return console.log("Don't Have Form Data")
        if (Object.keys(formData).length === 0) return alert("Please do not submit empty form data")


        // collect data from dataSource
        let { FBID,First_NAME,Last_NAME,GENDER,LOCATION,HomeTown,BIRTHDAY,EMAIL,MOBILE } = formData;

        // create an Object for data & send it to server...
        const model = {
            // avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10)}.jpg`,
            FBID , First_NAME,Last_NAME,GENDER,LOCATION,HomeTown,BIRTHDAY,EMAIL,MOBILE
        }

        // send all the values...
        addMutation.mutate(model);
    }


    
    if (addMutation.isLoading) return <Spinner />
    if (addMutation.isSuccess) return <SuccessSMS message='Added Successfully' />
    if (addMutation.isError) return <ErrorSMS message={addMutation.error.message} />


    return (
        // grab the data of these input boxes & return as an object

        <form className="grid lg:grid-cols-3 w-4/6 gap-4" onSubmit={handleSubmit}>

            <div className='input-type'>
                <input
                    type="number"
                    name='FBID'
                    placeholder='FBID'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="text"
                    name='First_NAME'
                    placeholder='First_NAME'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>
            
            <div className='input-type'>
                <input
                    type="text"
                    name='Last_NAME'
                    placeholder='Last_NAME'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>
            <div className='input-type'>
                <input
                    type="text"
                    name='GENDER'
                    placeholder='GENDER'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>
            <div className='input-type'>
                <input
                    type="text"
                    name='LOCATION'
                    placeholder='LOCATION'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="text"
                    name='HomeTown'
                    placeholder='HomeTown'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="email"
                    name='EMAIL'
                    placeholder='EMAIL'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="text"
                    name='BIRTHDAY'
                    placeholder='BIRTHDAY'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="number"
                    name='MOBILE'
                    placeholder='MOBILE'
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

    
            <button type="submit" className='flex items-center justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500 duratison-150'>
                Add <span className='px-1'> <BiPlus size={20} /> </span>
            </button>
        </form>
    )
}
