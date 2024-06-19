import { validateQueryHistory } from '../validators.js';
import historyRepository from './history-repository.js';

const getHistory = async (req, res) => {
  try {
    const { id, limit, offset } = validateQueryHistory(req.query);
    const result = await historyRepository.getHistory(id, limit, offset);
    res.json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export default {
  getHistory,
};
