import Axios from 'axios';
import { RestUrls } from './Urls';

export class RestDataSource {
  GetData = (dataType) => this.SendRequest('get', RestUrls[dataType]);

  SendRequest = (method, url) => Axios.request({ method, url });
}
