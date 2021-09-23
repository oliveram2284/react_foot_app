import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import { Grid,Card, Container } from 'semantic-ui-react'
import axios from 'axios';

const Categories = () => {
    const [show, setShow] = useState(false);
    const [categorias, setCategorias] = useState();


    useEffect(()=>{

        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res)=>{
            setCategorias(res.data.categories);
            setShow(true);
        });

    },[]);

    return (
        <Container>
            <Grid.Column>
                <h1>Meal Categories</h1>
                <Card.Group style={{justifyContent:'center'}}>
                {
                    show && categorias.map((categoria)=>{
                        return(
                            <Card key={categoria.idCategory}
                                image={categoria.strCategoryThumb}
                                header={categoria.strCategory}
                                meta='Category'
                                as={Link} to={`/category/${categoria.strCategory}`}
                                />
                        )
                    })
                }
                </Card.Group>
                
            </Grid.Column>
        </Container>
    )
}

export default Categories;