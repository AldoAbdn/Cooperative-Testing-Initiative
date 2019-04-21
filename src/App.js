import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import {Redirect} from 'react-router-dom';
import './App.css';
import './portal.ttf';
import Splashscreen from './components/Splashscreen';
import Main from './components/Main';
import Video from './components/Video';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Redirect exact from="/" to="/0"/>
            <Route path="/0" render={(routeProps)=>(<Splashscreen/>)}/>
            <Route path="/1" render={(routeProps)=>(<Video src="https://www.youtube.com/embed/JgV5GHhikz4?autoplay=1"/>)}/>
            <Route path="/2" render={(routeProps)=>(<Main/>)}/>
            <Route path="/3" render={(routeProps)=>(<Video src="https://www.youtube.com/embed/wYps-kGPh78?start=3&autoplay=1"/>)}/>
            <Route path="/4" render={(routeProps)=>(<Video src="https://www.youtube.com/embed/dVVZaZ8yO6o?autoplay=1"/>)}/>
          </Switch>
          <KeyboardEventHandler handleKeys={['shift+0']} onKeyEvent={(key,e)=>window.location.hash="#/0"}/>
          <KeyboardEventHandler handleKeys={['shift+1']} onKeyEvent={(key,e)=>window.location.hash="#/1"}/>
          <KeyboardEventHandler handleKeys={['shift+2']} onKeyEvent={(key,e)=>window.location.hash="#/2"}/>
          <KeyboardEventHandler handleKeys={['shift+3']} onKeyEvent={(key,e)=>window.location.hash="#/3"}/>
          <KeyboardEventHandler handleKeys={['shift+4']} onKeyEvent={(key,e)=>window.location.hash="#/4"}/>
      </div>
    );
  }
}

export default App;
