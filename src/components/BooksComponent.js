import React from 'react';
import { Card, CardBody, CardText, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderBookItem({ book, onClick }) {
        return(
            <Card>
                <Link to={`/menu/${book._id}`}  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <CardImg width="100%" src={baseUrl + book.image} alt={book.description} />
                      <CardBody>
                      <CardTitle style={{fontSize: "50px"}}>{book.price}</CardTitle>
                            <CardText>{book.description}</CardText>
                            <CardText>{book.college}</CardText>
                            <CardText>{book.year}</CardText>
                            <CardText>{book.branch}</CardText>
                            <CardText>{book.number}</CardText>
                        </CardBody>
                </Link>
            </Card>
        );
    }

    const Books = (props) => {

        const books = props.books.books.map((book) => {
            return (
                <div key={book._id} className="col-12 col-md-5 m-1">
                    <RenderBookItem book={book} />
                </div>
            );
        });

        if (props.books.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.books.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.books.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Books</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Books</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {books}
                    </div>
                </div>
            );
    }

export default Books;