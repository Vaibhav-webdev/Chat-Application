import React from 'react'
const Left = () => {
  return (
    <aside className="w-80 border-r border-white/20 p-4">
          <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
            💬 PigioChat
          </h2>

          <input
            type="text"
            placeholder="Search user..."
            className="w-full mb-4 px-4 py-2 text-white rounded-lg bg-white/10 
            outline-none placeholder:text-white/50"
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
  )
}

export default Left