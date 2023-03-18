const orderError = (error: string): never => {
    // it means anything we may declare further on in the actual code is doing to be completely unreachable
    throw new Error(error);
    // never going to return a value!
};

orderError('Something went wrong');
