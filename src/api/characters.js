const URL = "https://api.disneyapi.dev/characters/"

/*function to call all of the characters in the api by page*/
export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}?page=12?`);
        const response = await request.json();
        return response.data;
    } catch (err) {
        throw Error(err);
    }
}
/*function to call a single character from the url, with the varibale of the id */
export async function getCharacterByIdApi(_id){
    try {
        const request = await fetch(`${URL}${_id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

