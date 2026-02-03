"use client";

import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import HomeClient from "./components/HomeClient";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <HomeClient />
  );
}
