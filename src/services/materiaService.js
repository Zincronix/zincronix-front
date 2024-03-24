import api from "./api";

export const getMaterias = async () => {
  try {
    const response = await api.get("/materias");
    return response.data;
  } catch (error) {
    console.error("Error al obtener materias: ", error);
    throw error;
  }
};
