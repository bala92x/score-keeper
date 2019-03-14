import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        const title = 'Score Keep';
        const subtitle = 'Created by Budavölgyi Bálint'
        const players = Players
            .find({}, {
                sort: {
                    score: -1
                }
            })
            .fetch();
        const positionedPlayers = calculatePlayerPositions(players);
        ReactDOM.render(
            <App
                title={title}
                subtitle={subtitle}
                players={positionedPlayers}
            />,
            document.getElementById('app')
        );
    });
});