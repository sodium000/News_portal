import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const CategoriesPromise = fetch("/categories.json").then(res => res.json())

const CategoryList = () => {
    const CategoriesList = use(CategoriesPromise);

    return (
        <div>
            <div className='flex flex-col mt-5 gap-1'>
                {
                    CategoriesList.map(category =>
                    <NavLink key={category.id} 
                    className={" btn pl-10 text-accent hover:bg-sky-200 bg-base-100 border-0 font-semibold"}
                    to={`/category/${category.id}`}>{category.name}
                    </NavLink>

                    )
                }
            </div>
        </div>
    );
};

export default CategoryList;