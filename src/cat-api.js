const BASIC_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_Z0N4wcm0Lt5gOqM9GmlmIvTC9XVoa2E2U8memozNFRVSDdo0ehnxLDcly09dxDp6"

export function fetchBreeds() {
   return fetch(`${BASIC_URL}/breeds?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error (response.status);
        }
        return response.json();
    })
};

export function fetchCatByBreed(breedId) {
    return fetch(`${BASIC_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error (response.status);
        }
        return response.json();
    })
};