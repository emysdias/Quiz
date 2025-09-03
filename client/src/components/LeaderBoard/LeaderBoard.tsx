import React from "react";
import type { LeaderBoardProps } from "./types";

const LeaderBoard: React.FC<LeaderBoardProps> = ({ userInfo }) => {
  return (
    <section>
      <ul>
        {userInfo.map((user, idx) => (
          <li key={user.id ?? idx}>
            {user.name} - {user.score}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LeaderBoard;
