import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PurePropTypesComponent from './common/PurePropTypesComponent';
import ProgressBar from './common/ProgressBar';
import getVolumeIconClassName from '../utils/getVolumeIconClassName';

class VolumeControl extends PurePropTypesComponent {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };

    // bind methods fired on React events
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter () {
    this.setState({
      hover: true
    });
  }

  handleMouseLeave () {
    this.setState({
      hover: false
    });
  }

  render () {
    const {
      volume,
      muted,
      setVolumeInProgress,
      onSetVolume,
      onSetVolumeComplete,
      onToggleMuted
    } = this.props;
    return (
      <div
        className="rr_audio_player__audio_button rr_audio_player__volume_control"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={onToggleMuted}
      >
        <div className={classNames(
          'foreground',
          getVolumeIconClassName(volume, muted)
        )} />
        {(this.state.hover || setVolumeInProgress) && (
          <div className="rr_audio_player__volume_control__volume_bar_container">
            <ProgressBar
              className="rr_audio_player__volume_control__volume_bar"
              progressClassName="volume"
              progress={muted ? 0 : volume}
              progressDirection="up"
              handle={<div style={{ width: 20, height: 20, background: 'green', borderRadius: '50%' }} />}
              adjusting={setVolumeInProgress}
              onAdjustProgress={onSetVolume}
              onAdjustComplete={onSetVolumeComplete}
            />
          </div>
        )}
      </div>
    );
  }
}

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  setVolumeInProgress: PropTypes.bool.isRequired,
  onSetVolume: PropTypes.func.isRequired,
  onSetVolumeComplete: PropTypes.func.isRequired,
  onToggleMuted: PropTypes.func.isRequired
};

module.exports = VolumeControl;
