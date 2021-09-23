import React from "react";
import { Link } from 'react-router-dom'
import { Card} from 'semantic-ui-react'


const MealCard = ({meal}) => {
    return(
        <Card key={meal.idMeal}
            image={meal.strMealThumb}
            header={meal.strMeal}
            as={Link} to={`/meal/${meal.idMeal}/detail`}
            />
    )
}

const MealListing = ({meals}) => {

    return (        
        meals.map((meal)=>{
            return <MealCard meal={meal} />
        })
    )
}

export default MealListing;