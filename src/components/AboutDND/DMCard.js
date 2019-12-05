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
          <CardTitle>How to be a Dungeon Master</CardTitle>
          <CardText class="text-justify">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vKQv4GC0N9Q" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="text-justify">
              Enjoy an animated exploration of how a notable Dungeon Master has evolved his craft! Start the road through understanding how to weave a story of your own, pull from the world of Dungeons and Dragons and he Multiverse, as well as handing off pages to players to allow them to create the adventure with you.
            </p>
          </CardText>
          <Button href="https://www.youtube.com/watch?v=6KXLID2oZYI" color="primary">Check out Zee's Animated Spellbook!</Button>
        </CardBody>
      </Card>

    );
  }
}


export default DNDCard;