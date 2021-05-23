import React, { Component } from 'react';
import Home from './HomeComponent';
import Year from './YearComponent';
import Branch from './BranchComponent';
import Books from './BooksComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Favorites from './FavoriteComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchBooks, fetchComments, fetchPromos, fetchLeaders, loginUser, logoutUser, fetchFavorites, postFavorite, deleteFavorite } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
      books: state.books,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
      favorites: state.favorites,
      auth: state.auth,
      year: state.year
    }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
  fetchBooks: () => {dispatch(fetchBooks())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchFavorites: () => dispatch(fetchFavorites()),
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchFavorites();
  }

  render() {

    // dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
    // dishesLoading={this.props.dishes.isLoading}
    // dishesErrMess={this.props.dishes.errMess}

    const HomePage = () => {
      return(
        <Home 
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leaderLoading={this.props.leaders.isLoading}
          leaderErrMess={this.props.leaders.errMess}
        />
      );
    }

    // const DishWithId = ({match}) => {
    //   return(
    //     this.props.auth.isAuthenticated
    //     ?
    //     <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
    //       isLoading={this.props.dishes.isLoading}
    //       errMess={this.props.dishes.errMess}
    //       comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
    //       commentsErrMess={this.props.comments.errMess}
    //       postComment={this.props.postComment}
    //       favorite={this.props.favorites.favorites.dishes.some((dish) => dish._id === match.params.dishId)}
    //       postFavorite={this.props.postFavorite}
    //       />
    //     :
    //     <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
    //       isLoading={this.props.dishes.isLoading}
    //       errMess={this.props.dishes.errMess}
    //       comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
    //       commentsErrMess={this.props.comments.errMess}
    //       postComment={this.props.postComment}
    //       favorite={false}
    //       postFavorite={this.props.postFavorite}
    //       />
    //   );
    // };

    const BookWithYear = ({match}) => {
      return(
        <Branch year={match.params.year} />
      );
    };

    const BranchWithYear = ({match}) => {
      return(
        <Books
        year={match.params.year} branch={match.params.branch}
        books={this.props.books}
        />
      );
    };

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );

    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
          />   
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/year" component={() => <Year />} />
              <Route exact path="/:year/branch" component={BookWithYear} />
              <Route exact path="/:year/:branch/books" component={BranchWithYear} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              {/* <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} /> */}
              {/* <Route path="/menu/:dishId" component={DishWithId} /> */}
              <PrivateRoute exact path="/favorites" component={() => <Favorites favorites={this.props.favorites} deleteFavorite={this.props.deleteFavorite} />} />
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
