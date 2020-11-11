const API_KEY = '23567b218376f79d9415'; // other valid API keys: '760b5fb497225856222a', '0e2a751704a65685eefc'
const API_ENDPOINT = 'http://195.39.233.28:8035';

async function getToken() {
  const res = await fetch(`${API_ENDPOINT}/auth`, {
    method: 'GET',
    body: JSON.stringify({
      apiKey: API_KEY,
    }),
  });
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

async function getPictures(page: number = 1) {
  const res = await fetch(`${API_ENDPOINT}/images?page=${page}`, {
    method: 'GET',
  });
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

async function getPictureDetails(id: number = 1) {
  const res = await fetch(`${API_ENDPOINT}/images/${id}`, {
    method: 'GET',
  });
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

export default {
  getToken,
  getPictures,
  getPictureDetails,
};
