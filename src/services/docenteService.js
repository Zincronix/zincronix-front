import api from "./api";

export const getDocentes = async () => {
  try {
    const response = await api.get("/docentes");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener docentes: ", error);
    throw error;
  }
};

export const createDocente = async (docenteData) => {
  try {
    const response = await api.post("/docentes", docenteData);
    return response.data;
  } catch (error) {
    console.error("Error al crear docente: ", error);
    throw error;
  }
};
