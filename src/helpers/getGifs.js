

export const getGifs = async ( category ) => {

    // consulta get asincrona
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=bjNfOnn51RkUAE4qr8sg8VyI1OvBM7uv`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    // se lee la respuesta y retorna objeto con los datos que se necesitan

    const gifs =  data.map( img => {
        return {
            id: img.id,
            title: img.title,
            // si trae el elemento lo carga
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;

}
