import usersRepository from './users-repository.js';

import { validateCreateUserDto, validateUpdateUserDto } from '../validators.js';

const create = async (req, res) => {
  try {
    const userData = validateCreateUserDto(req.body);
    const user = await usersRepository.create(userData);
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
const update = async (req, res) => {
  try {
    const updateData = validateUpdateUserDto(req.body);
    const user = await usersRepository.update(
      parseInt(req.params.id),
      updateData
    );
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
const getAll = async (req, res) => {
  const { rows } = await usersRepository.getAll();
  res.json(rows);
};
const remove = async (req, res) => {
  const { rowCount } = await usersRepository.remove(parseInt(req.params.id));
  res.json(rowCount > 0);
};

export default {
  create,
  update,
  getAll,
  remove,
};
