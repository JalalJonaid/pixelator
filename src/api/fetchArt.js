export function getSingleArt(id){
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
}

export function getValidId () {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir`)
}