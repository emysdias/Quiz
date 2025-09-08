import React from "react";
import type { LeaderBoardProps } from "./types";

const LeaderBoard: React.FC<LeaderBoardProps> = ({ userInfo }) => {
  const medals = {
    0: { icon: "🥇", color: "text-yellow-500" },
    1: { icon: "🥈", color: "text-gray-400" },
    2: { icon: "🥉", color: "text-amber-700" },
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Leaderboard
      </h2>
      <div className="space-y-3">
        {userInfo.map((user, idx) => {
          const hasMedal = idx < 3;
          const medalData = hasMedal
            ? medals[idx as keyof typeof medals]
            : null;

          const bgColor = idx % 2 === 0 ? "bg-gray-50" : "bg-white";

          return (
            <div
              key={user?.id}
              className={`flex justify-between items-center p-4 rounded-lg ${bgColor}`}
            >
              <div className="flex items-center">
                <span className="w-6 text-center text-gray-500 font-medium mr-2">
                  {idx + 1}
                </span>
                {hasMedal && (
                  <span className={`text-xl mr-2 ${medalData?.color}`}>
                    {medalData?.icon}
                  </span>
                )}
                <span className="font-medium text-gray-800">{user?.name}</span>
              </div>
              <span className="font-semibold text-gray-700">
                {user?.score} pts
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LeaderBoard;
