export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-5">

      <button className="w-full rounded-xl bg-white text-black py-3 font-semibold">
        + New Chat
      </button>

      <h2 className="mt-8 text-sm uppercase text-zinc-400">
        Recent Chats
      </h2>

      <div className="mt-4 space-y-2">

        <div className="rounded-lg bg-zinc-900 p-3 cursor-pointer hover:bg-zinc-800">
          Restaurant Marketing
        </div>

        <div className="rounded-lg bg-zinc-900 p-3 cursor-pointer hover:bg-zinc-800">
          Logo Design
        </div>

        <div className="rounded-lg bg-zinc-900 p-3 cursor-pointer hover:bg-zinc-800">
          Menu Creator
        </div>

      </div>

    </aside>
  );
}