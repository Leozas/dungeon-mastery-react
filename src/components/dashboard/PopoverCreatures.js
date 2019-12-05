import React, { Component } from "react";
import { Container, Row, Col, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import axios from 'axios'

class PopoverCreatures extends Component {
  constructor(props) {
    super(props)
    this.state = {
      creatures: [],
    }
  }

    creaturespopover() {
    if (this.state.creatures.length === 0) {
      axios.get('https://dungeonmastery.appspot.com/api/creatures')
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({
            creatures: res.data,
          })
        });
    }

    return this.state.creatures.map((creature, index) => {
      const { creature_name, strength, dexterity, constitution, intelligence, wisedom, charisma, intitiative, health_points, weapon, weapon_damage, armor, armor_class } = creature //destructuring
      return (
        <div>
          <Button className="mr-1" color="primary" id={"creatPopover" + index} type="button">
            {creature_name}
          </Button>
          <UncontrolledPopover placement="left" target={"creatPopover" + index}>
            <PopoverHeader>{creature_name}</PopoverHeader>
            <PopoverBody>
              HP: {health_points} | STR: {strength} | DEX: {dexterity}<br></br>
              CON: {constitution} | INT: {intelligence} | WIS: {wisedom}<br></br>
              CHAR: {charisma} | Intitiative: {intitiative}<br></br>
              Equipped Weapon: {weapon} | Damage: {weapon_damage}<br></br>
              Donned Armor: {armor} | Armor Class: {armor_class} <br></br>
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
            {this.creaturespopover()}
          </Col>
        </Row>
      </Container>
    </>

  )
}
}

export default PopoverCreatures;