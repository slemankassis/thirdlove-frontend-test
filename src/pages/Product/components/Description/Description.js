import React from 'react';
import { sanitizeHtml } from '../../../../utils';

class Description extends React.Component {
  render() {
    return (
      sanitizeHtml(this.props.contentHtml, ['meta', 'p', 'ul', 'li', 'span'])
    );
  }
}

export default Description;
