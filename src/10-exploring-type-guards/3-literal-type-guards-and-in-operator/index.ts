class Song4 {
    kind: 'song';
    constructor(public title: string, public duration: number) {}
}

class PlayList3 {
    kind: 'playlist';
    constructor(public name: string, public songs: Song4[]) {}
}

function isSong2(item: any): item is Song4 {
    return 'title' in item; // boolean
}

function getItemName3(item: Song4 | PlayList3) {
    // if (isSong2(item)) {
    //     return item.title; // item: Song4
    // }
    // return item.name; // item: PlayList3

    // or

    if (item.kind === 'song') {
        return item.title; // item: Song4
    }

    return item.name; // item: PlayList3
}

const songName3 = getItemName3(new Song4('Wonderful life', 690096));
console.log('Song name:', songName3);

const playListName3 = getItemName3(new PlayList3('The best songs', [new Song4('The man', 300000)]));
console.log('Playlist name:', playListName3);
