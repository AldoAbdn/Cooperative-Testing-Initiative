import React, {Component}  from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import music from '../Music/music.mp3';
import onehour from '../Music/onehour.wav';
import itch from '../Music/itch.wav';
import testsubjects from '../Music/testsubjects.wav';
import difficult from '../Music/difficult.wav';
/**
 * Ending Scene
 */
class Main extends Component {
    constructor(){
        super();
        this.state = {paused:true,time:3600};
        try{
            this.song = new Audio(music); 
            this.song.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            this.song.volume = 0.2;
            this.song.play();
        } catch(error){
            console.log(error);
        }
    }
    componentWillUnmount(){
        this.song.pause();
    }
    timer = () => {
        if(this.state.time>0){
            this.setState({time:this.state.time-1});
        }
    }
    handleTimerToggle = ()=>{
        if(this.state.paused){
            this.timerInterval = setInterval(this.timer, 1000);
        } else {
            clearInterval(this.timerInterval);
        }
        this.setState({paused:!this.state.paused});
    }
    render() {
        let date = new Date(null);
        date.setSeconds(this.state.time);

        return (
            <div className="main">
                <div className="timer">
                    <span id="time">
                        {date.toISOString().substr(11, 8)}
                    </span>
                </div>
                <div className="hint">
                    <textarea id="hint">

                    </textarea>
                </div>
                <KeyboardEventHandler handleKeys={['shift+space']} onKeyEvent={(key,e)=>this.handleTimerToggle()}/>
                <KeyboardEventHandler handleKeys={['ctrl+shift+1']} onKeyEvent={(key,e)=>{let sound = new Audio(onehour);sound.play()}}/>
                <KeyboardEventHandler handleKeys={['ctrl+shift+2']} onKeyEvent={(key,e)=>{let sound = new Audio(itch);sound.play()}}/>
                <KeyboardEventHandler handleKeys={['ctrl+shift+3']} onKeyEvent={(key,e)=>{let sound = new Audio(testsubjects);sound.play()}}/>
                <KeyboardEventHandler handleKeys={['ctrl+shift+4']} onKeyEvent={(key,e)=>{let sound = new Audio(difficult);sound.play()}}/>
            </div>
        )
    }
};

export default Main;