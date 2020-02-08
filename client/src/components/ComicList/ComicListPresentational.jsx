import React from 'react';
import store, { GET_COMIC_LIST } from '../../store';

class ComicListPresentational extends React.Component {

  componentDidMount() {
    store.dispatch({type: GET_COMIC_LIST})
  }

  render() {
    if (!this.props.comicList.loaded) {
      return <div>Loading comics, standby...</div>;
    }

    return (
      <div>
        {this.props.comicList.comicList.map(comic => (
          <div key={comic.id}>
            <p>{comic.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ComicListPresentational;