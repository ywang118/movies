import React,{ Fragment } from 'react';
import Movie from './Movie';
import { Card } from 'semantic-ui-react';
class MovieList extends React.Component {

  renderMovie(){

    // if(this.props.movies){
    //   let match = this.props.movies.filter(m=> m.title.toLowerCase() === this.props.searchTerm.toLowerCase())
    //   let narrow = this.props.movies.filter(m=>m.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    //
    //     if (match){
    //       return (  <Movie key={match.id}
    //         image = {match.poster_image}
    //         showModal={this.props.showModal} name={match.title}
    //         />)
    //     } else if (narrow) {
    //       return (
    //         narrow.map(movieObj =>
    //           <Movie key={movieObj.id}
    //           image = {movieObj.poster_image}
    //           showModal={this.props.showModal} name={movieObj.title}
    //           />)
    //       )
    //     } else {
    //       return (
    //         this.props.movies.map(movieObj =>
    //           <Movie key={movieObj.id}
    //           image = {movieObj.poster_image}
    //           showModal={this.props.showModal} name={movieObj.title}
    //           />)
    //       )
    //     }
    //
    //
    // }
    if(this.props.movies){
      let narrow = this.props.movies.filter(m=>m.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      if(narrow.length > 0){
        return (
                narrow.map(movieObj =>
                  <Movie key={movieObj.id}
                  image = {movieObj.poster_image}
                  showModal={this.props.showModal} name={movieObj.title}
                  />)
              )
      } else {
        return (
          this.props.movies.map(movieObj =>
            <Movie key={movieObj.id}
            image = {movieObj.poster_image}
            showModal={this.props.showModal} name={movieObj.title}
            />)
        )

      }
    }
  }

  render(){
    // console.log(this.props.movies)
    return (
      <Fragment>
        <Card.Group id="videos" itemsPerRow={3}>
        {this.renderMovie()}
        </Card.Group>
      </Fragment>
    )

  }
}

export default MovieList
