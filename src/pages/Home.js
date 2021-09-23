import React,{useState,useEffect} from "react";
import { Grid,Card, Container,Segment, Form, Header} from 'semantic-ui-react'
import axios from 'axios';

import {
    FilterCategory,
    FilterCountry,
    FilterIngredient
} from "../components/FilterMeals";

import MealListing from "../components/MealListing";

const apiUrl = `https://www.themealdb.com/api/json/v1/1`;

const Home = () => {

    const [title,   setTitle]   = useState('All ')
    const [meals, setMeals]     = useState([])
    const filterType            = { country:'a', category:'c', ingredients:'i'}

    const getMeals  = (filter = 'i', value = 'Chicken') => {

        axios.get(`${apiUrl}/filter.php?${ filter }=${value}`).then( (res) => setMeals(res.data.meals) )

    }

    useEffect(()=>{
        getMeals()
    },[]);

    const handleChangeOption = (e, data) => {

        setMeals([])
        setTitle(data.value);
        getMeals(filterType[data.name], data.value)

    }

    return (

        <Container  fluid>
            <Grid.Column relaxed='very' >
                <h1>Meal Categories</h1>
                <Segment>
                    <Form>
                        <Form.Group widths='equal'>
                            <FilterCountry handleChangeOption={handleChangeOption} />
                            <FilterIngredient handleChangeOption={handleChangeOption}/>
                            <FilterCategory handleChangeOption={handleChangeOption}/>
                        </Form.Group>
                    </Form>
                </Segment>

                <Grid.Column  relaxed='very'>
                    <Segment>

                        <Header as='h1'>
                            {title} Meals
                        </Header>

                        <Card.Group style={{justifyContent:'center'}}>

                            <MealListing meals={meals}/>

                        </Card.Group>
                    </Segment>
                    
                </Grid.Column>
                
            </Grid.Column>

        </Container>

    )
}

export default Home;