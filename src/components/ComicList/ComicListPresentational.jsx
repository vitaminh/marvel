import React from 'react';
import store, { GET_COMIC_LIST } from '../../store';

class ComicListPresentational extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    store.dispatch({type: GET_COMIC_LIST})
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading comics, standby...</div>;
    }

    return (
      <div>
        {this.props.comicList.map(comic => (
          <div key={comic.id}>
            <p>{comic.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ComicListPresentational;