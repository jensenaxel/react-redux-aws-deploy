/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class TestPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="test">
        <Helmet>
          <title>Test Page</title>
          <meta
            name="description"
            content="FTeston"
          />
        </Helmet>
        <h1>Tests</h1>
        <ul>
          <li>
            <p className="title">Test</p>
            <p>
              Test
            </p>
          </li>
        </ul>
        <i>and much more...</i>
      </div>
    );
  }
}
