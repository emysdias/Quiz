const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-lg backdrop-blur-sm p-8">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
          Home
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 active:scale-[0.98] transition">
            Começar quiz
          </button>
          <button className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-white/80 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/40 transition">
            Saiba mais
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Partidas
            </p>
            <p className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              12
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/70 dark:border-slate-800 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Acertos
            </p>
            <p className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              87%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
