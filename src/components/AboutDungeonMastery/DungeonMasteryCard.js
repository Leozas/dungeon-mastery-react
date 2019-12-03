import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';

class DungeonMasteryCard extends Component {

  render() {
    return (

      <Card>
        <CardHeader>

        </CardHeader>
        <CardBody>
          <CardTitle>What is Dungeons and Dragons?</CardTitle>
          <CardImg src="https://www.freelogodesign.org/file/app/client/thumb/c974fa44-00b9-4fa0-add8-7731d61b91c9_200x200.png?1575402373052" />
          <CardText>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/2PEt5RdNHNw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p>
            New to the world of Dungeons & Dragons? Here's the place to start. Take a closer look at this legendary fantasy role-playing game and find out why millions of players worldwide have stepped into the boots of mighty heroes (and sneaky antiheroes) to create their own stories.
            </p>
          </CardText>
          <Button href="https://dnd.wizards.com/dungeons-and-dragons/what-is-dd">
            Dungeons and Dragons Official Pages
          </Button>
        </CardBody>
      </Card>
    );
  }
}


export default DungeonMasteryCard;