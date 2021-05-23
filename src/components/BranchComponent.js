import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import { Link, useParams } from 'react-router-dom';
// import { useParams } from "react-router";

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

class Branch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
render() {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "orange"}}>
                    <Link to={`/${this.props.year}/cs/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Computer Science</CardTitle>
                            <CardText>Click here to buy Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "skyblue"}}>
                    <Link to={`/${this.props.year}/it/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Information Technology</CardTitle>
                            <CardText>Click here to sell Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "skyblue"}}>
                    <Link to={`/${this.props.year}/tronics/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Electronics</CardTitle>
                            <CardText>Click here to buy Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "orange"}}>
                    <Link to={`/${this.props.year}/extc/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>ExTC</CardTitle>
                            <CardText>Click here to sell Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "orange"}}>
                    <Link to={`/${this.props.year}/mech/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Mechanical</CardTitle>
                            <CardText>Click here to buy Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "skyblue"}}>
                    <Link to={`/${this.props.year}/prod/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Production</CardTitle>
                            <CardText>Click here to sell Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "skyblue"}}>
                    <Link to={`/${this.props.year}/civil/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Civil</CardTitle>
                            <CardText>Click here to buy Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card style={{backgroundColor: "orange"}}>
                    <Link to={`/${this.props.year}/text/books`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CardImg />
                        <CardBody>
                            <CardTitle>Textile</CardTitle>
                            <CardText>Click here to sell Books</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
};
}

export default Branch;