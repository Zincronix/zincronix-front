export const reservaAdapterToSend = (reservaData) => {
  let reservaAdapted = {};
  reservaAdapted.period_id = reservaData.id;
  reservaAdapted.reason_reservation = reservaData.motivo;
  reservaAdapted.date_reservation = reservaData.fecha;

  reservaAdapted.classroom = reservaData.aulas.map((aula) => aula.id);
  reservaAdapted.teachers = reservaData.docentes.map((docente) => {
    let materias = {};
    let docenteId = docente.id;

    materias.subjects = docente.materias.map((materia) => {
      let grupos = materia.grupos.map((grupo) => grupo.id);
      return {
        subject_id: materia.grupos.materiaId,
        groups: grupos,
      };
    });

    return {
      teacher_id: docenteId,
    };
  });
  console.log(reservaAdapted);
  return reservaAdapted;
};
