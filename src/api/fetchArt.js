export function getSingleArt(id){
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
}