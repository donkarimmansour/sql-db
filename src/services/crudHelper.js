// for ==> offline / localHost
// const BASE_URL = 'http://localhost:3000';                

// for ==> online / live server at vercel 
const BASE_URL = 'https://sql-db.vercel.app';     



// get data for all user's from backend...
export const getUsers = async (skip , search) => {
    const url = `${BASE_URL}/api/users`;

    const res = await fetch(url + "?" + Object.entries({skip , ...search , type : "get"}).map(e => e.join('=')).join('&') );
    const data = await res.json();  
    return data;
} 

// get data for 1 single user from backend...
export const getUser = async (id) => {

    const url = `${BASE_URL}/api/users/${id}`;

    const res = await fetch(url); 
    const data = await res.json(); 
 
    return data ? data : {};
}
 
 
export const getCount = async (search) => {
 
    const url = `${BASE_URL}/api/users`;

    const res = await fetch(url + "?" + Object.entries({...search , type : "count"}).map(e => e.join('=')).join('&') );
    const data = await res.json();

    return data;
}



// posting a new user
export const addUser = async (formData) => {
    try {
        const Options = {  
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}/api/users`, Options)
        const json = await response.json()

        return json;
    } catch (error) {
        return error;
    }
}



// Update a new user
export const updateUser = async (userId, formData) => {
    const Options = {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
    const json = await response.json()
    return json;
}



// Delete a new user
export const deleteUser = async (userId) => {
    const Options = {
        method: 'DELETE',
        headers: { 'Content-Type': "application/json" },
    }

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
    const json = await response.json()
    return json;
}
