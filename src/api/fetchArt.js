export function getSingleArt(id){
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
}

export function getValidIds() {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=collection&departmentIds=3,5,10,13,17`)
}