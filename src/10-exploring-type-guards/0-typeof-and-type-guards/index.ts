// function TypeGuards(bar: string | number) {
//     if (typeof bar === 'string') {
//         // string
//         return bar;
//     }
//
//     // number
//     return bar;
// }

class Song {
    constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
    const { duration } = item;

    if (typeof duration === 'string') {
        return duration;
    }

    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(new Song('Wonderful life', '05:31'));
console.log(songDurationFromString);
const songDurationFromMs = getSongDuration(new Song('Wonderful life', 330000));
console.log(songDurationFromMs);
