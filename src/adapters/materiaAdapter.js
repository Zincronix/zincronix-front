const materiaAdapter = (materiaData) => {
  return {
    id: materiaData.id,
    nombre: materiaData.name,
  };
};

export default materiaAdapter;
