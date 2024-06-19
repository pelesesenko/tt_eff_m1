const create = async (data) => {
  //call history repo
  return data;
};

const update = async (id, data) => {
  //call history repo
  return { data, id };
};

const remove = async (id) => {
  return id;
};
const getAll = async () => {
  return 'All';
};

export default {
  create,
  update,
  remove,
  getAll,
};
