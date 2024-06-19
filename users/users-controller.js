import usersRepository from './users-repository.js';
import {
  validateCreateUserDto,
  validateQueryHistory,
  validateUpdateUserDto,
} from '../validators.js';

const create = async (req, res) => {
  try {
    const userData = validateCreateUserDto(req.body);
    const result = await usersRepository.create(userData);
    res.json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
const update = async (req, res) => {
  try {
    const updateData = validateUpdateUserDto(req.body);
    const result = await usersRepository.update(
      parseInt(req.params.id),
      updateData
    );
    res.json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
const getAll = async (req, res) => {
  const result = await usersRepository.getAll();
  res.json(result);
};
const remove = async (req, res) => {
  const result = await usersRepository.remove(parseInt(req.params.id));
  res.json(result);
};
const getHistory = async (req, res) => {
  try {
    const { id, limit, offset } = validateQueryHistory(req.query);
    const result = await usersRepository.getHistory(id, limit, offset);
    res.json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export default {
  create,
  update,
  getAll,
  remove,
  getHistory,
};
