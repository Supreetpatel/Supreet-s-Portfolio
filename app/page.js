import React from "react";
import SideNav from "@/components/SideNav";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <div className="md:flex gap-4 h-svh overflow-y-auto md:overflow-y-hidden">
      <SideNav />
      <MainPage />
    </div>
  );
}
