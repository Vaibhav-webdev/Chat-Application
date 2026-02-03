"use client"

export default function Left({ open, setOpen }) {
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
        className={`fixed md:static z-50 md:z-auto top-0 left-0 h-full w-80 backdrop-blur-xl border-r border-white/20 p-4 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
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

        <ul className="space-y-3 text-sm">
          {[
            "John Johnson",
            "Michael Brown",
            "William Jones",
            "Liam Stone",
            "Noah Kites",
            "Oliver Bean",
            "James Cook",
          ].map((name, i) => (
            <li key={i} className="flex items-center gap-3 opacity-80">
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
      </aside>
    </>
  );
}
