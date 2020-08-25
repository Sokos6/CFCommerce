import Axios from 'axios';
import { RestUrls } from './Urls';

export class RestDataSource {
  GetData = async (dataType, params) =>
    this.sendRequest('get', RestUrls[dataType], params);

  SendRequest = (method, url, params) =>
    Axios.request({
      method,
      url,
      params,
    });
}
