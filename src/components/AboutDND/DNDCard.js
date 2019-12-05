import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';

class DNDCard extends Component {

  render() {
    return (

      <Card className="bg-secondary">
        <CardBody className="text-center">
          <CardTitle>What is Dungeons and Dragons?</CardTitle>
          <CardImg src="https://dnd.wizards.com/sites/all/themes/dx/logo.png" />
          <CardText className="text-justify">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/2PEt5RdNHNw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="text-justify">
            New to the world of Dungeons & Dragons? Here's the place to start.
            <br></br>
            <br></br>
            Take a closer look at this legendary fantasy role-playing game and find out why millions of players worldwide have stepped into the boots of mighty heroes (and sneaky antiheroes) to create their own stories.
            <br></br>
            <br></br>
            </p>
          </CardText>
          <Button href="https://dnd.wizards.com/dungeons-and-dragons/what-is-dd" color="primary">
            Dungeons and Dragons Official Pages
          </Button>
        </CardBody>
      </Card>

    );
  }
}


export default DNDCard;