
export type TrainingSession = {
  id: string;
  title: string;
  day: string;
  duration: string;
};

export type UserProfile = {
  memberCode: string;
  fullName: string;
  planName: string;
  trainingSessions: TrainingSession[];
};
