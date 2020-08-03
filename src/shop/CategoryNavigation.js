import React, { Component } from 'react';
import { ToggleLink } from '../ToggleLink';

export class CategoryNavigation extends Component {
  render() {
    return (
      <>
        <ToggleLink to={this.props.baseUrl} exact={true}>All</ToggleLink>
        {this.props.categories &&
          this.props.categories.map((cat) => (
            <ToggleLink
              key={cat}
              to={`${this.props.baseUrl}/${cat.toLowerCase()}`}
            >
              {cat}
            </ToggleLink>
          ))}
      </>
    );
  }
}
