import { toggleChangeAction, updateAction, deleteAction } from '../redux/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../services/crudHelper';
import { Spinner } from '.'; 
import SearchContext from '../contexts/search';
import { useContext , useEffect } from 'react';

 
// This <Component /> call from 🟨 index.js 🟨
export default function Table( { pageCurrent } ) {
 
    const search = useContext(SearchContext)

    // fetch data from backend - api call...
    const { isLoading, isError, data, error , refetch } = useQuery(['users'],  () =>  getUsers(pageCurrent === 1 ? 0 : (pageCurrent - 1) * search.limit , search));

    
    useEffect(() => {
        refetch()
    } , [search , pageCurrent])
    


     
    if (isLoading) return <Spinner />

    if (isError || (data &&  "error" in data)) {

        try {
            return <div className='text-lg text-red-500 text-center py-3'>Got Error - {error || data?.error}</div>  
        } catch (err) {
            console.log("error" , error);
            return <div className='text-lg text-red-500 text-center py-3'>Got Error - {err?.message}</div>  
        }
      }


    // console.log("pageCurrent => "  , pageCurrent);
    // console.log("search => " , search);

    return (
        <table className='min-w-full table-auto' id="table-to-xls-users">

            {/* 🟨🟨🟨 Table Header 🟨🟨🟨 */}
            <thead>

                {/* 🟨🟨🟨 Row 🟨🟨🟨 */}
                <tr className='bg-gray-800 w-fit'>

                    {/* 🟨🟨🟨 Column's 🟨🟨🟨 */}
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>FBID</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>First_NAME</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>Last_NAME</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>GENDER</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>LOCATION</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>HomeTown</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>BIRTHDAY</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>EMAIL</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>MOBILE</span>
                    </th>
                    <th className='px-2 py-2'>
                        <span className='text-gray-200'>Actions</span>
                    </th>
                </tr>

            </thead>


            {/* 🟨🟨🟨 Table Body 🟨🟨🟨 */}
            <tbody className='bg-gray-300'>
                {
                    data.length
                        ? data.map(person => <TableRow key={person._id} {...person} />)
                        : <h1 className='text-center text-red-600 text-xl font-bold'>No data found</h1>
                }
            </tbody>

        </table>
    )
}



//🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
//dedicated child for this component...
const TableRow = ({ _id, FBID , First_NAME,Last_NAME,GENDER,LOCATION,HomeTown,BIRTHDAY,EMAIL,MOBILE }) => {

    // read ==> operation at redux store... state...
    const visible = useSelector((state) => state.app.client.toggleFrom);
    const dispatch = useDispatch();


    const onUpdate = () => {

        // change the value of the store
        dispatch(toggleChangeAction(_id))

        // user click at update/edit icon... for edit info...
        if (visible) {
            dispatch(updateAction(_id))
        }
    }


    const onDelete = () => {

        // if edit window is not open, at then delete this...
        if (!visible) {
            dispatch(deleteAction(_id))
        }

    }



    return (
        <tr className='bg-gray-100 text-center' >

            <td className='px-2 py-2'>
                <span>{FBID || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{First_NAME || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{Last_NAME || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{GENDER || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{LOCATION || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{HomeTown || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{BIRTHDAY || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{EMAIL || 'Unknown'}</span>
            </td>
            <td className='px-2 py-2'>
                <span>{MOBILE || 'Unknown'}</span>
            </td>

            <td className='px-2 py-2 space-x-2 '>
                <button className='cursor-pointer' onClick={onUpdate}>
                    <BiEdit size={25} color={"rgb(35,200,95)"} />
                </button>
                <button className='cursor-pointer' onClick={onDelete}>
                    <BiTrashAlt size={25} color={"rgb(245,65,95)"} />
                </button>
            </td>
        </tr >
    )
}