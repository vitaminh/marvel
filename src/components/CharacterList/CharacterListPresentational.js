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
          <div key={character.id}>
            <p>{character.name}<img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="Character Thumbnail" /></p>
          </div>
        ))}
      </div>
    );
  }
}

export default CharacterListPresentational;
