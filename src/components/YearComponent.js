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

function Year(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "orange"}}>
                    <Link to={'/1/nobranch/books'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>1st Year</CardTitle>
                            <CardText>Click here to buy Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "skyblue"}}>
                    <Link to={'/2/branch'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>2nd Year</CardTitle>
                            <CardText>Click here to sell Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "skyblue"}}>
                    <Link to={'/3/branch'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>3rd Year</CardTitle>
                            <CardText>Click here to buy Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "orange"}}>
                    <Link to={'/4/branch'} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>4th Year</CardTitle>
                            <CardText>Click here to sell Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Year;