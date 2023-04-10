import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem(STORAGE_KEY);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const currentTime = function (e) {
    localStorage.setItem(STORAGE_KEY, e.seconds);
}

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(savedTime).then(function(seconds) {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    console.log(savedTime);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});