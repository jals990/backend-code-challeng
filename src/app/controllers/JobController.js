import api from '../../config/api';

class JobController {
  async index(req, res) {
    const leveeResponse = await api.get();

    const dados = leveeResponse.data;

    return res.json(dados);
  }
}

export default new JobController();
