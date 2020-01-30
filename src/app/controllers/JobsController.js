/* eslint-disable no-underscore-dangle */
import api from '../../config/api';

class JobsController {
  async index(req, res) {
    const leveeResponse = await api.get();

    const data = JSON.parse(
      JSON.stringify(leveeResponse.data.collection._embedded)
    );
    console.log(data);
    return res.json(data);
  }
}

export default new JobsController();
