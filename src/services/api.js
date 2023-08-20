
import axios from 'axios';

const API_URI = 'http://localhost:8000'

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
   // eslint-disable-next-lines
    const { params, urlParams, ...body } = requestData; 
   

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: body
    })
}

export default API_GMAIL;
