const Service = {
  async getMovie(url: string) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        if (data.status.code === 1) {
          return data.movies;
        }
      }
    } catch (err) {
      return undefined;
    }
    return undefined;
  },
}

export default Service;
