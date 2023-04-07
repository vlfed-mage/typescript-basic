interface Item {
    name: string;
}

interface InterfaceArtist extends Item {
    songs: number;
}

interface InterfaceArtist {
    // you allow to do this
    getSongs(): number;
}

type TypeArtist = {
    name: string;
} & Item;

// type TypeArtist = {
//     // but can't do this
//     // ...
// };

const newArtist: InterfaceArtist = {
    name: 'ABC',
    songs: 5,
    getSongs(): number {
        return this.songs;
    },
};
