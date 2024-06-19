const getHistory = async (id, limit, offset) => {
  return { id, offset, limit };
};

const addRecord = async (id, type, value) => {
  return { id, type, value };
};

export default {
  getHistory,
  addRecord,
};
