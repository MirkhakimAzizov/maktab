import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../../API';

const index = () => {
    const {id} = useParams();
    const [data, setData] = React.useState([]);
    useEffect(()=> {
        api.getPost(id).then(res=>{
            // console.log(res.data);
            setData(res.data);
        })
    },[])
    return (
        <div>
            <ul className="user__list my-2 list-unstyled w-100">
                <li className="user__item text-center">
                    <Link className='px-3 py-2 bg-primary text-light rounded-pill fs-6 text-uppercase' to='/users'>Go Back</Link>
                </li>
            </ul>
            <ul className="user__list">
                {
                    data.title
                }
            </ul>
        </div>
    );
};

export default index;