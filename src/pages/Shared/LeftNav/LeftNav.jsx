import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])


    return (
        <div className="mt-4">
            <h4>All Category</h4>


            <div className='ps-4'>
            {
                categories.map(categorie => <p key={categorie.id}>
                    <Link to={`/category/${categorie.id}`} className='text-black text-decoration-none'>{categorie.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;