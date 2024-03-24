const grupoAdapter = (grupoData) => {
  return {
    id: grupoData.id,
    nombre: grupoData.name,
  };
};

export default grupoAdapter;
