import React from 'react';
import { sanitizeHtml } from '../../../../utils';
import './description.scss';

class Description extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {sanitizeHtml(this.props.contentHtml, ['meta', 'p', 'ul', 'li', 'span'])}
      </div>
    );
  }
}

export default Description;
