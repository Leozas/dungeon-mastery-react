

import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const Popovertest = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button
        className="mr-1"
        color="secondary"
        id={"Popover-" + id}
        type="button"
      >
        {character_name}
      </Button>
      <Popover
        placement="left"
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
      >
        <PopoverHeader>{character_name}</PopoverHeader>
        <PopoverBody>
            HP: {health_points} hp
            STR: {strength}
            DEX: {dexterity}
            CON: {constitution}
            INT: {intelligence}
            WIS: {wisedom}
            CHAR: {charisma}
            Intitiative: {intitiative}
            Equiped Weapon: {weapon} Damage: {weapon_damage}
            Donned Armor: {armor} Armor Class: {armorclass} 
            Slotted Spell: {spell} Damage: {spell_damage}
            Spell Description: {spell_description}
        </PopoverBody>
      </Popover>
    </span>
  );
};


export default PopoverTest;