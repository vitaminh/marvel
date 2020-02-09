import React from 'react';
import { withRouter } from 'react-router-dom';

import {fetchData} from '../store/utils'

class SingleComic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  async componentDidMount() {
    const comicId = this.props.match.params.id;
    const response = await fetchData(`https://gateway.marvel.com:443/v1/public/comics/${comicId}?`);
    this.setState(response.data.data.results[0]);
  }

  render() {
    if (!this.state.title) {
      return (<p>Loading</p>)
    }

    return (
      <div>
        <p>{this.state.title}</p>
      </div>
    )
  }
}

export default withRouter(SingleComic);