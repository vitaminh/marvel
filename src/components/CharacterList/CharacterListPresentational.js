import React from 'react';

class CharacterListPresentational extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    try {
      await this.props.loadCharacterList();
      this.setState({ loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading characters, standby...</div>;
    }

    return (
      <div>
        {this.props.characterList.map(character => (
          <p key={character.id}>{character.name}</p>
        ))}
      </div>
    );
  }
}

export default CharacterListPresentational;
