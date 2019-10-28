import React from 'react';

class Description extends React.Component {
  render() {
    console.log(this.props);

    return this.props.contentHtml;
  }
}

export default Description;
