import React, { Component } from "react";
import { Container, Row, Col, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import axios from 'axios'

class PopoverCharacters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
  }

    characterspopover() {
    if (this.state.characters.length === 0) {
      axios.get('https://dungeonmastery.appspot.com/api/characters')
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({
            characters: res.data,
          })
        });
    }

    return this.state.characters.map((character, index) => {
      const { character_name, strength, dexterity, constitution, intelligence, wisedom, charisma, intitiative, health_points, weapon, weapon_damage, armor, armor_class, spell, spell_damage } = character //destructuring
      return (
        <div>
          <Button className="mr-1" color="primary" id={"charPopover" + index} type="button">
            {character_name}
          </Button>
          <UncontrolledPopover placement="right" target={"charPopover" + index}>
            <PopoverHeader>{character_name}</PopoverHeader>
            <PopoverBody>
              HP: {health_points} | STR: {strength} | DEX: {dexterity}<br></br>
              CON: {constitution} | INT: {intelligence} | WIS: {wisedom}<br></br>
              CHAR: {charisma} | Intitiative: {intitiative}<br></br>
              Equipped Weapon: {weapon} | Damage: {weapon_damage}<br></br>
              Donned Armor: {armor} | Armor Class: {armor_class} <br></br>
              Slotted Spell: {spell} | Damage: {spell_damage} <br></br>
            </PopoverBody>
          </UncontrolledPopover>
        </div >
      )
  })
}

render() {
  return (

    <>
      <Container fluid>
        <Row>
          <Col>
            {this.characterspopover()}
          </Col>
        </Row>
      </Container>
    </>

  )
}
}

export default PopoverCharacters;