import React from 'react'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react';

const Movie = ({image, name,showModal}) =>{

    return(
      <Card className="movieCard">
        <Image onClick={event=> showModal(image)} className="ImageContent"src={image} wrapped ui={false} />


        <Card.Content>
           <center>
          <Card.Header>{name}</Card.Header>
          </center>
        </Card.Content>

      </Card>
  )
}

export default Movie
