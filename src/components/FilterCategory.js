import React,{useState,useEffect} from "react";

import { Form, Select } from 'semantic-ui-react'
import axios from 'axios';

const FilterCategory = ({handleChangeOption}) => {
    
    const [categories, setCategories]   = useState([])

    useEffect(()=>{

        axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`).then((res)=>{
            const categories = res.data.meals.map((category)=>{
                return {
                    key:category.strCategory,
                    value:category.strCategory,
                    text:category.strCategory
                    }
            });
            setCategories(categories);
        });

    });

    return ( 
        <Form.Field
            control={Select}
            options={categories}                            
            name='category'
            onChange={handleChangeOption}
            label={{ children: 'Filter by Category', htmlFor: 'form-select-control-gender' }}
            placeholder='Filter by Category'
            search
            searchInput={{ id: '' }}
        />
    )
}

export default FilterCategory;