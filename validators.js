export const validateCreateUserDto = (dto) => {
  if (!dto.firstName || typeof dto.firstName !== 'string') {
    throw new Error('First name must be string');
  }
  if (!dto.lastName || typeof dto.lastName !== 'string') {
    throw new Error('Last name must be string');
  }
  if (!dto.age || typeof dto.age !== 'number' || dto.age <= 0) {
    throw new Error('Age must be positive number');
  }

  return {
    firstName: dto.firstName,
    lastName: dto.lastName,
    age: dto.age,
  };
};
export const validateUpdateUserDto = (dto) => {
  const result = {};
  if (dto.firstName) {
    if (typeof dto.firstName !== 'string')
      throw new Error('First name must be string');
    result.firstName = dto.firstName;
  }
  if (dto.lastName) {
    if (typeof dto.lastName !== 'string')
      throw new Error('Last name must be string');
    result.lastName = dto.lastName;
  }
  if (dto.age) {
    if (typeof dto.age !== 'number' || dto.age <= 0)
      throw new Error('Age must be positive number');
    result.age = dto.age;
  }

  return result;
};

export const validateQueryHistory = (query) => {
  const id = parseInt(query.id);
  if (!id) throw new Error('Id must be number');
  const limit = parseInt(query.limit) || 10;
  const offset = parseInt(query.offset) || 0;
  return { id, limit, offset };
};
