type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <>
      <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 text-white shadow-xl shadow-black/10 sm:p-5 md:mt-8 md:p-6">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Gestão
          </p>
          <h1 className="mt-2 text-xl font-bold text-zinc-100">Rastreamento</h1>
        </div>
        {children}
      </section>
    </>
  );
}
