import React, {Component}  from 'react';
/**
 * Shows a YouTube Video
 */
class Video extends Component {
    render() {
        return (
            <div className="center">
                <div id="video">
                    <iframe width="560" height="315" src={this.props.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h1>Incoming Transmission</h1>
                </div>
            </div>
        )
    }
};

export default Video;