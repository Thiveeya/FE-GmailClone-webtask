import axios from 'axios';

const API_URI = 'http://localhost:3001/';




const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
  const { params, urlParams, ...body } = requestData;

  try {
    const response = await axios({
      method: serviceUrlObject.method,
      url: `${API_URI}/${serviceUrlObject.endpoint}/${type}${urlParams ? `/${urlParams}` : ''}`,
      params,
      data: body,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('API request failed.');
  }
};

export default API_GMAIL;
