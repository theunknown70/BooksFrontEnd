import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "orange"}}>
                    <Link to={'/year'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Buy</CardTitle>
                            <CardText>Click here to buy Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "skyblue"}}>
                    <Link to={'/login'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Sell</CardTitle>
                            <CardText>Click here to sell Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;