import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';

class DNDCard extends Component {

  render() {
    return (

      <Card>
        <CardHeader>

        </CardHeader>
        <CardBody>
          <CardTitle>How to be a Dungeon Master</CardTitle>
          <CardText>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vKQv4GC0N9Q" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p>
              Enjoy an animated exploration of how a notable Dungeon Master has evolved his craft! Start the road through understanding how to weave a story of your own, pull from the world of Dungeons and Dragons and he Multiverse, as well as handing off pages to players to allow them to create the adventure with you.
            </p>
          </CardText>
          <Button href="https://www.youtube.com/watch?v=6KXLID2oZYI">Check out Zee's Animated Spellbook!</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>

    );
  }
}


export default DNDCard;