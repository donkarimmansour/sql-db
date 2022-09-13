import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser, getUsers, updateUser } from '../services/crudHelper';
import { SuccessSMS, ErrorSMS, Spinner } from '.';
import { BiEraser } from 'react-icons/bi';


// This <Component /> call from 🟨 index.js 🟨
export default function FormUpdateUser({ formId, formData, setFormData }) {

    

    const queryClient = useQueryClient();

    // for data fetching, backend data calling...
    const { isLoading, isError, data, error } = useQuery(['users', formId], () => getUser(formId));


    // react query mutation for update backend data... POST | PUT | DELETE 
    const updateMutation = useMutation((newData) => updateUser(formId, newData), {
        onSuccess: async (data) => {
            // update the Table UI Data...
            // queryClient.setQueryData(['users'], (oleValue) => [data]);
            queryClient.prefetchQuery(['users'], getUsers(50));
        }
    });




    if (isLoading) return <Spinner />
    if (isError) return <div className='text-lg text-red-700 text-center py-3'>Got Error - {error}</div>


    // these data come from backend
    const { FBID , First_NAME,Last_NAME,GENDER,LOCATION,HomeTown,BIRTHDAY,EMAIL,MOBILE } = data;
    // const [firstName, lastName] = name ? name.split(' ') : formData;
    // console.log(name && name);
    // console.log(name && name.split(' '));

    // user form Update by this function, when user edit its info...
    const handleSubmit = async (e) => {
        // stop browser to reloading...
        e.preventDefault();

        // prevent user submit empty form data...
        // if (Object.keys(formData).length === 0) return window.alert("Don't Have Form Data");

        // let userName = `${formData.firstName ?? firstName} ${formData.lastName ?? lastName}`

        let updatedObject = Object.assign({}, data, formData);
        // data.name = 'admin', formData.name = 'client', 
        // data.name = 'client' [override it's values...]  


        console.log(updatedObject);

        await updateMutation.mutate(updatedObject);
    }

    // console.log(updateMutation);

    // if (Object.keys(formData).length > 0) return <SuccessSMS message='Data Added' />
    // if (Object.keys(formData).length > 0) return <ErrorSMS message='Error' />



    return (
        // grab the data of these input boxes & return as an object

        <form className="grid lg:grid-cols-3 w-4/6 gap-4" onSubmit={handleSubmit}>


            <div className='input-type'>
                <input
                    type="number"
                    name='FBID'
                    placeholder='FBID'
                    defaultValue={FBID}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="text"
                    name='First_NAME'
                    placeholder='First_NAME'
                    defaultValue={First_NAME}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>
            
            <div className='input-type'>
                <input
                    type="text"
                    name='Last_NAME'
                    placeholder='Last_NAME'
                    defaultValue={Last_NAME}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>
            <div className='input-type'>
                <input
                    type="text"
                    name='GENDER'
                    placeholder='GENDER'
                    defaultValue={GENDER}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>
            <div className='input-type'>
                <input
                    type="text"
                    name='LOCATION'
                    placeholder='LOCATION'
                    defaultValue={LOCATION}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="text"
                    name='HomeTown'
                    placeholder='HomeTown'
                    defaultValue={HomeTown}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="email"
                    name='EMAIL'
                    placeholder='EMAIL'
                    defaultValue={EMAIL}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="text"
                    name='BIRTHDAY'
                    placeholder='BIRTHDAY'
                    defaultValue={BIRTHDAY}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>

            <div className='input-type'>
                <input
                    type="number"
                    name='MOBILE'
                    placeholder='MOBILE'
                    defaultValue={MOBILE}
                    className='border w-full px-5 py-3 focus:outline-none rounded-md'
                    onChange={setFormData}
                />
            </div>


            
            <button type="submit" className='flex items-center justify-center text-md w-2/6 bg-orange-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-orange-400 hover:text-orange-400 duratison-150'>
                Update <span className='px-1'> <BiEraser size={20} /> </span>
            </button>
        </form>
    )
}
