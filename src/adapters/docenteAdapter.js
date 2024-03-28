export const docenteAdapter = (docenteData) => {
  return {
    id: docenteData.id,
    nombre: docenteData.name,
  };
};
export default docenteAdapter;
