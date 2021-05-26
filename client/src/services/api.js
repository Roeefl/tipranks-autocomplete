import axios from 'axios';

const baseURL = 'http://localhost:1337';

class ApiService {
  static async autocomplete(name) {
    const url = `${baseURL}/autocomplete`;

    try {
      const response = await axios
        .get(url, {
          params: {
            name,
          },
        })
        .then(res => res.data);

      const { results = [] } = response;
      return results;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default ApiService;
