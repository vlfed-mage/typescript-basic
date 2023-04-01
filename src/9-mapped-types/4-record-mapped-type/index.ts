let dictionary: { [key: string]: typeof item } = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: '548uafj',
    next: '47rards',
};

// Numbers are coerced to Strings
dictionary[0] = item;

console.log(dictionary); // { '0': {current: '548uafj', next: '47rards'} }
