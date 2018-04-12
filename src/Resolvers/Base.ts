const BaseQuery = {
    first: () => {
        return new Promise ((resolve, reject) => {
            resolve('Great1');
        });
    }
};

export { BaseQuery };