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

    },[]);

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

const FilterCountry = ({handleChangeOption}) => {
    
    const [countries, setCountries]     = useState([])

    useEffect(()=>{

        axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`).then((res)=>{
            const countries = res.data.meals.map((country, index)=>{
                return {
                    key:country.strArea,
                    value:country.strArea,
                    text:country.strArea
                }
            });
            setCountries(countries);
        });

    },[]);

    return ( 
        <Form.Field
            control={Select}
            options={countries}
            name='country'
            onChange={handleChangeOption}
            label={{ children: 'Filter by Countries', htmlFor: 'form-select-control-gender' }}
            placeholder='Filter by Countries'
            search
            searchInput={{ id: '' }}
        />
    )
}

const FilterIngredient = ({handleChangeOption}) => {
    
    const [ingredients, setIngredients]     = useState([])

    useEffect(()=>{

        axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`).then((res)=>{

            const items = res.data.meals.map((item, index)=>{
                return {
                    key:item.idIngredient,
                    value:item.strIngredient,
                    text:item.strIngredient
                }
            });
            setIngredients(items);
        });

    },[]);

    return ( 
        <Form.Field
            control={Select}
            options={ingredients}
            name='ingredients'
            onChange={handleChangeOption}
            label={{ children: 'Filter by Ingredients', htmlFor: 'form-select-control-gender' }}
            placeholder='Filter by Ingredients'
            search
            searchInput={{ id: '' }}
        />
    )
}

export {
    FilterCategory,
    FilterCountry,
    FilterIngredient
} ;