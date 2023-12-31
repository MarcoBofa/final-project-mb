"use client";
import React, { FC, useState } from "react";
import MainComponent from "./MainContent";
import Sidebar from "./Sidebar";
import { safeUser } from "@/types";
import Leaderboard from "./LeaderBoard";
import Settings from "./Settings";
import MyCompetition from "./MyCompetition";

interface DashboardProps {
  user: safeUser;
}

const PageLayout: FC<DashboardProps> = ({ user }) => {
  const [activeContent, setContent] = useState<string>("dashboard"); // default to 'dashboard'

  let ContentComponent: JSX.Element;

  switch (activeContent) {
    case "mycomp":
      ContentComponent = <MyCompetition user={user} />;
      break;
    case "leaderboard":
      ContentComponent = <Leaderboard user={user} />;
      break;
    case "settings":
      ContentComponent = <Settings />;
      break;
    case "dashboard":
    default:
      ContentComponent = <MainComponent user={user} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 h-full">
        <Sidebar activeContent={activeContent} setContent={setContent} />
        {user ? ContentComponent : <div>No user data</div>}
      </div>
    </div>
  );
};

export default PageLayout;
