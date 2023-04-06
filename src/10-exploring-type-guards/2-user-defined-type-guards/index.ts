class Song3 {
    constructor(public title: string, public duration: number) {}
}

class PlayList2 {
    constructor(public name: string, public songs: Song3[]) {}
}

function isSong(item: any): item is Song3 {
    return item instanceof Song3;
}

function getItemName2(item: Song3 | PlayList2) {
    if (isSong(item)) {
        return item.title;
    }
    return item.name;
}

const songName2 = getItemName2(new Song3('Wonderful life', 690096));
console.log('Song name:', songName2);

const playListName2 = getItemName2(new PlayList2('The best songs', [new Song3('The man', 300000)]));
console.log('Playlist name:', playListName2);
