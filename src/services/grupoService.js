import api from "./api";

export const getGrupos = async () => {
  try {
    const response = await api.get("/grupos");
    return response.data;
  } catch (error) {
    console.error("Error al obtener grupos: ", error);
    throw error;
  }
};
