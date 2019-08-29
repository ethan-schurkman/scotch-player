import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.component';
import Details from './components/details.component';
import Player from './components/player.component';
import Progress from './components/progress.component';


// component class
class App extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Details title={'Track title'} />
                <Player />
                <Progress
                  position={'0.75'}
                  elapsed={'00:00'}
                  total={'00:40'}
                />
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('content'));