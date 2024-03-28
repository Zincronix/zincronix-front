import { reservaAdapterToSend } from "./reservaAdapter";

export default send = () => {
  const data = {
    period_id: 1,
    reason_reservation: "Este es el motivo",
    date_reservation: "2024-05-25",
    classroom: [1, 2],
    teachers: [
      {
        teacher_id: 1,
        subjects: [
          {
            subject_id: 1,
            groups: [1, 2],
          },
          {
            subject_id: 2,
            groups: [1, 2],
          },
        ],
      },
      {
        teacher_id: 2,
        subjects: [
          {
            subject_id: 1,
            groups: [1, 2],
          },
          {
            subject_id: 2,
            groups: [1, 2],
          },
        ],
      },
    ],
  };
  useEffect(() => {
    return () => {
      second;
    };
  }, [third]);
};
