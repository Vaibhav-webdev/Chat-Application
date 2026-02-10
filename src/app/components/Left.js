"use client"

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react"
import { signOut } from "next-auth/react";

export default function Left({ open, setOpen }) {
  const searchParams = useSearchParams()
  const chatId = searchParams.get("chat")
  const router = useRouter()
  // useEffect(() => {
  //   try {
  //     if (!session) return;
  
  //     socket.connect();

  //     socket.on("typing-message", (msg) => {
  //       if (document.hidden) {
  //         new Notification("New message received!");
  //       } 
  //       setMessages((prev) => [...prev, msg]);
  //       messageSound?.play().catch(() => {});
  //     });
  //   } catch (error) {
  //     toast.error("No Internet Connection!")
  //   }

  //   return () => {
  //     socket.off("typing-message");
  //     socket.disconnect();
  //   };
  // }, [session]);

  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static z-50 md:z-auto top-0 left-0 h-full w-80 border-r border-white/20 p-4 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        {/* Close Button (mobile) */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden text-white text-xl mb-4"
        >
          ✕
        </button>

        <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
          💬 PigioChat
        </h2>

        <input
          type="text"
          placeholder="Search user..."
          className="w-full mb-4 px-4 py-2 text-white rounded-lg bg-white/10 outline-none placeholder:text-white/50"
        />

        <ul className="space-y-1 text-sm">
          {[
            "Group Chating",
            "Michael Brown",
            "William Jones",
            "Liam Stone",
            "Noah Kites",
            "Oliver Bean",
            "James Cook",
          ].map((name, i) => (
            <li key={i} onClick={() => {
              router.push(`/?room=group${i}&show=true&chat=${i}`)
            }} className={`flex rounded-2xl items-center ${chatId === String(i) && "bg-cyan-800/80"} transition duration-200 ease-in-out gap-3 opacity-80 hover:bg-white/20 cursor-pointer p-2`}>
              <div className="w-9 h-9 rounded-full bg-white/50 flex items-center justify-center">
                👤
              </div>
              <div>
                <p className="text-white">{name}</p>
                <span className="text-xs text-white/50">Offline</span>
              </div>
            </li>
          ))}
        </ul>
        <button
      onClick={() =>
        {
          signOut({ redirect: true, callbackUrl: "https://pigio.vercel.app/login" })
        }}
      className="px-4 mt-2 cursor-pointer sm:px-6 py-2 sm:py-3 rounded-full border border-gray-300 text-white/80 text-sm sm:text-base hover:bg-white/30 transition w-full"
    >
      Logout
    </button>
      </aside>
    </>
  );
}
