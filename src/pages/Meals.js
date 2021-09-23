import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Grid,Card, Container } from 'semantic-ui-react'
import axios from 'axios';

const Meals = () => {    
    const {keyword} = useParams(); 
    const [meals, setMeals] = useState([]);
    
    
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`).then((res)=>{
            setMeals(res.data.meals);
        });
    },[]);

    return (
        <Container>
            <Grid.Column>
                <h1>{keyword} Meal</h1>
                <Card.Group style={{justifyContent:'center'}}>
                {
                    meals.map((meal)=>{
                        return(
                            <Card key={meal.idMeal}
                                image={meal.strMealThumb}
                                header={meal.strMeal}
                                as={Link} to={`/meal/${meal.idMeal}/detail`}
                                />
                        )
                    })
                }
                </Card.Group>
                
            </Grid.Column>
        </Container>
        
    )
}

export default Meals;