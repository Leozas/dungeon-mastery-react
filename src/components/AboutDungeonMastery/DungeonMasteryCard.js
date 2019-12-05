import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter
} from 'reactstrap';

class DungeonMasteryCard extends Component {

  render() {
    return (

      <Card  className="bg-secondary">
        <CardBody className="text-center">
          <CardTitle>What is Dungeon Mastery?</CardTitle>
          <CardImg src="https://www.freelogodesign.org/file/app/client/thumb/c974fa44-00b9-4fa0-add8-7731d61b91c9_200x200.png?1575402373052" />
          <CardText className="text-justify">
            <p>
                We are constantly battling information overload. As you read this right now you may be multitasking trying to take care of a late night dinner, or some work, or maybe even be listening to some music or an audiobook. Dungeons and Dragons is no different.<br></br>
                <br></br>
                Dungeon Mastery aims to bring the information you need, and only that, to your fingertips at the touch of a button to keep your D&D Session flowing. Juggling Chris's Warrior's dexterity modifier with his enemy Goblin's attack damage, all the while Nelsy's Mage is trying to cast fireball... It's a lot of moving parts for  Dungeon Masters.<br></br>
<br></br>
                Let get you some Mastery of your sitation with Dungeon Mastery.<br></br>
<br></br>
                Dungeon Mastery currently follows the Dungeons and Dragons Fifth Edition Ruleset
            </p>
          </CardText>
          <Button href="/sessioncontrol" color="primary">
            Sign Up
          </Button>
        </CardBody>
      </Card>
    );
  }
}


export default DungeonMasteryCard;