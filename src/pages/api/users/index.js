import { deleteUser, getUsers, postUser, updateUser , getCount } from "../../../controller/controller";
import connectMongo from "../../../data/dbConnection";


// this function handle ==> routing + call controller  
export default async function handler(req, res) {

    const BASE_URL = 'https://sql-db.vercel.app';     

    // MongoDB connection + Error Handel
    connectMongo().catch(() =>
        res.status(405).json({ error: 'Error in the Connection' })
    );

    // type of request ==> ['GET', 'POST', 'PUT', 'DELETE']
    const { method } = req; 

    switch (method) {
        case 'GET':

            const params = new URL(BASE_URL + req.url).searchParams;
            const type = params.get('type');

            if (type === "get") {
               getUsers(req, res , params.get('key') ,  params.get('query') , params.get('by') , params.get('limit')  , params.get('skip'))
            } else if (type === "count") {
               getCount(req, res , params.get('key')  ,  params.get('query'), params.get('by'))
            }

            break;
        case 'POST':
            postUser(req, res);
            break;
        case 'PUT':
            updateUser(req, res);
            break;
        case 'DELETE':
            deleteUser(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
