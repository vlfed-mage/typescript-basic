class Foo {
    bar() {}
}

const bar = new Foo();

console.log(Object.getPrototypeOf(bar) === Foo.prototype);
console.log(bar instanceof Foo); // the same

class Song2 {
    constructor(public title: string, public duration: number) {}
}

class PlayList {
    constructor(public name: string, public songs: Song2[]) {}
}

function getItemName(item: Song2 | PlayList) {
    // if ((item as Song2).title) {
    //     return (item as Song2).title;
    // }
    // return (item as PlayList).name;

    // the best way is:
    if (item instanceof Song2) {
        return item.title;
    }
    return item.name;
}

const songName = getItemName(new Song2('Wonderful life', 690096));
console.log('Song name:', songName);

const playListName = getItemName(new PlayList('The best songs', [new Song2('The man', 300000)]));
console.log('Playlist name:', playListName);
