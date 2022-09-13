import { FormAddUser, FormUpdateUser } from ".";
import { useSelector } from "react-redux";
import { useReducer } from "react";


const formReducer = (state, event) => {

    const { name, value } = event.target;

    return {
        ...state, [name]: value
    }
}


// This <Component /> call from 🟨 index.js 🟨
export default function Form() {

    // all user given ==> input data...
    const [formData, setFormData] = useReducer(formReducer, {});

    // get specific user id
    const formId = useSelector(state => state.app.client.formId);

    return (
        <div className="container mx-auto py-5">
            {
                formId
                    ? FormUpdateUser({ formId, formData, setFormData })
                    : FormAddUser({ formData, setFormData })
            }
        </div>
    );

}
