interface Artist {
    name: string;
}

function artistFactory({ name }: Artist) {
    return { id: 101, name };
}

artistFactory({ name: 'Vlad' });

// -----------------

class ArtistCreator {
    constructor(public name: string) {}
}

function classArtistFactory({ name }: ArtistCreator) {
    return new ArtistCreator(name);
}

classArtistFactory({ name: 'Vlad' });
