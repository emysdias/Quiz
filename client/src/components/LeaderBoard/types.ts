interface UserInfo {
  id: string | number;
  name: string;
  score: number;
}

export interface LeaderBoardProps {
  userInfo: Array<UserInfo>;
}
