import axios from "axios"

export async function getImage({nameSender, toggle}) {
    console.log(toggle)
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "31470169-9c9cb372459e41628308e9796";
    const imageType = "photo";
    const oriental = "horizontal";
    const perPage = 12;
    const page = 1;
    try {
        toggle();
      const response = await axios.get(`${BASE_URL}?q=${nameSender}&page=${page}&key=${API_KEY}&image_type=${imageType}&orientation=${oriental}&per_page=${perPage}`);
      console.log(response);

      return response;
    } catch (error) {
      console.error(error);
    } finally {
        toggle();
    }
  }