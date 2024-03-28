import api from "./api";

export const createAmbiente = async (ambienteData) => {
  try {
    const response = await api.post("/ambientes", ambienteData);
    return response.data;
  } catch (error) {
    console.error("Error al crear ambiente: ", error);
  }
};

export const getAmbiente = async () => {
  try {
    const response = await api.get("/ambientes");
    return response.data;
  } catch (error) {
    console.error("Error al obtener ambietes: ", error);
  }
};
