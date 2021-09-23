import React,{useState,useEffect} from "react";

import { Grid } from 'semantic-ui-react'
import axios from 'axios';

const Home = () => {
    const [categorias, setCategorias] = useState([]);

    
    useEffect(()=>{
        console.log("===> LOAD HOME")
        
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res)=>{
            console.log("Albums: ",res);
            setCategorias(res.catories);
        });
        
    },[]);

    return (
        <Grid.Column>
            <h1>HOME</h1>
        </Grid.Column>
    )
}

export default Home;