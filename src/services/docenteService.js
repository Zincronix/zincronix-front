import api from "./api";

export const getDocentes = async () => {
  try {
    const response = await api.get("/docentes");
    return response.data;
  } catch (error) {
    console.error("Error al obtener docentes: ", error);
    throw error;
  }
};
