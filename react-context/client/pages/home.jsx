import React from 'react';
import Redirect from '../components/redirect';
import AppContext from '../lib/app-context';

const styles = {
  gifContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: '75%',
    position: 'relative'
  },
  gif: {
    position: 'absolute'
  }
};

export default class Home extends React.Component {
  render() {

    if (!this.context.user) return <Redirect to="sign-in" />;

    return (
      <div style={styles.gifContainer}>
        <iframe
          src="https://giphy.com/embed/Ju7l5y9osyymQ"
          width="100%"
          height="100%"
          frameBorder="0"
          style={styles.gif} />
      </div>
    );
  }
}
Home.contextType = AppContext;
