import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Container, Grid, Image, Header,Card, Table } from 'semantic-ui-react'
import axios from 'axios';

const MealDetail = () => {
    const {id} = useParams();
    const [mealId] = useState(id);

    const [mealDetail, setMealDetail] = useState([]);
    const [meals, setMeals] = useState(false);
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).then((res)=>{
            setMealDetail(res.data.meals[0]);
        });
    },[mealId]);

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealDetail.strCategory}`).then((res)=>{
           setMeals(res.data.meals);
        });
    },[mealDetail]);

    return (

        <Container>
            <Grid style={{paddingTop:20}}>

                <Grid.Column width={5}>                    
                    <Image src={mealDetail.strMealThumb} />
                </Grid.Column>
                <Grid.Column width={8} textAlign='left'>
                    <Header size='small' >
                        From: {mealDetail.strArea} 
                    </Header>
                    <Header size='large' >
                        {mealDetail.strMeal}
                    </Header>
                    <p>
                        {mealDetail.strInstructions}
                    </p>

                    <Grid.Column>
                        <Table basic='very' celled >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Ingredientes</Table.HeaderCell>
                                    <Table.HeaderCell>Measures</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {Array.from({ length: 20 }, (_, i) => {

                                    if( mealDetail[`strIngredient${i}`] && mealDetail[`strIngredient${i}`] !=='' ) {
                                        return  (
                                            <Table.Row key={i}>
                                                <Table.Cell>
                                                <Header as='h4' >
                                                    {mealDetail[`strIngredient${i}`]}
                                                </Header>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {mealDetail[`strMeasure${i}`]}
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    }
                                })}
                                
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Column>


                <Grid.Column width={3}>
                    <Header size='large' >
                        Meal same Category
                    </Header>
                    <Grid.Column>
                        {
                            meals && meals.map((item)=>{
                                return(                                    
                                    <Card >
                                        <Link to={`/meal/${item.idMeal}/detail`}>
                                            <Image src={item.strMealThumb}  size='medium' bordered centered />
                                        </Link>
                                        <Header as='h3' style={{marginBottom:'10px',marginTop:'10px'}} >
                                            {item.strMeal}
                                        </Header>
                                    </Card>                                
                                )
                            })
                        }
                    </Grid.Column>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default MealDetail;