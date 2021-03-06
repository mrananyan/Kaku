var React = require('react');
var ReactTooltip = require('react-tooltip');
var Searcher = require('../../../modules/Searcher');
var TracksComponent = require('../shared/tracks');

var AllTracksComponent = React.createClass({
  getInitialState: function() {
    return {
      tracks: []
    };
  },

  componentDidMount: function() {
    Searcher.on('search-results-updated', (results) => {
      this.setState({
        tracks: results
      });
    });
  },

  componentDidUpdate: function() {
    ReactTooltip.rebuild();
  },

  render: function() {
    let tracks = this.state.tracks;
    let controls = {
      trackModeButton: true,
      playAllButton: true,
      deleteAllButton: false
    };

    /* jshint ignore:start */
    return (
      <TracksComponent
        headerL10nId="search_header"
        headerIconClass="fa fa-fw fa-search"
        controls={controls}
        tracks={tracks}
      />
    );
    /* jshint ignore:end */
  }
});

module.exports = AllTracksComponent;
