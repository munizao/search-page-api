export function writeSearchToQuery(existingQuery, search) {
    const searchParams = new URLSearchParams(existingQuery);
    if(search.name) {
        searchParams.set('name', search.name);
    }
    if(search.colors.length > 0) {
        searchParams.set('colors', search.colors.join('|'));
    }
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const searchOptions = {
        name: searchParams.get('name') ? searchParams.get('name') : '',
        colors: searchParams.get('colors') ? searchParams.get('colors').split(',') : [],
        page: Number(searchParams.get('page')) 
    };
    return searchOptions;
}