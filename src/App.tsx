import React from 'react';


class CharacterBuilder {
  private readonly playerName: string;

  private name: string;
  private experince: number;
  private race: Race;
  private background: Background;
  private classes: Class[];
  private hp: number;

  constructor(playerName: string) {
    this.playerName = playerName;
  }

  build(): Character {
    return {};
  }
}

interface Character {
  readonly id: Id;
  readonly experince: number;
  readonly race: Race;
  readonly classes: Class[];
  readonly background: Background;
  readonly skills: Skill[];
  readonly proficiencies
}

interface Id {
    readonly characterName: String;
    readonly playerName: String;
}

const App = () => {
  new Character.Builder();
  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
