import React, { Fragment} from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import '../App.css';
import ImageModal from './ImageModal'
import PageButton from './PageButton';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      media:[],
      people: [],
      searchTerm: "",
      show:false,
      selectedImage: null,

    };


  }


  handleSearch = (event) => {
    let searchInput = event.target.value

    // Create URL endpoint with search input
    this.setState({
      searchTerm: searchInput
    })
   const url = 'https://stg.vuniverse.com/api/v1/search/'+ searchInput

   fetch(url,{
     method: 'GET',
     headers: {
       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiZDBlOWU4ZC00N2Q3LTQ1YWItOGFjYS0zNGVlMDNmZjhiMmYiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE1NzY3ODkxMTMsImV4cCI6MjIwNzkyODE1MywianRpIjoiMjc0N2EyMTQtOTNkMi00ZWMxLTliY2QtNTU1YTJhMzUwOTljIn0.Oh70ia-CkVeL8JIdgVNrrnm0nE_aeehi4w3uV7sgIWE',
       'Content-Type': 'application/json'
     }
   }).then(response => response.json())
     .then(movie => {

       // Update movie array in Redux store with response from API
       this.props.updateAllMovies(movie.media)
       // debugger
     })
   }


// Image Modal

  showModal = (img) => {

      this.setState({
        show: !this.state.show,
        selectedImage: img
      });
    };

    hideModal = () => {

    this.setState({ show: false });
  }
 // @component Searchbar - @handleSearch: Search bar handler
   render(){
    console.log(this.props.allMovies)
    return (
      <Fragment>
        <h1 id="homepage-title">Movies</h1>
        <br />
        <br />
        <SearchBar handleSearch={this.handleSearch}/>
        <br />
        <br />
        <br />
        <ImageModal handleClose={this.hideModal} show={this.state.show}>
          <div>
            <img  onClick={this.hideModal} src={this.state.selectedImage} style={{maxHeight: '750px', maxWidth: '750px'}}/>
            </div>
        </ImageModal>

        <MovieList movies= {this.props.allMovies.slice(this.props.index, this.props.index+9)} showModal={this.showModal} searchTerm= {this.state.searchTerm}/>
        <PageButton />
      </Fragment>

    )
  }
}

const mapStateToProps = (state)=> ({
    index:state.index,
    allMovies: state.allMovies
})

const mapDispatchToProps = (dispatch) => {
  return {
    updateAllMovies(allMovies){
      const action={
        type: 'UPDATE_ALL_MOVIES',
        allMovies: allMovies
      }
      // Dispatch local action to Redux store
      dispatch(action)
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
