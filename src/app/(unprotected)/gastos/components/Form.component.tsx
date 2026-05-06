"use client";

interface FormProps {
  addGastos: (formData: FormData) => Promise<void>;
}

export default function Form({ addGastos }: FormProps) {
  return (
    <form
      action={addGastos}
      className="flex w-full max-w-md flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="titulo"
          className="text-sm font-semibold text-zinc-400 ml-1"
        >
          Título
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          required
          placeholder="Ex: Compra de materiais de escritório"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="descricao"
          className="text-sm font-semibold text-zinc-400 ml-1"
        >
          Descrição
        </label>
        <textarea
          id="descricao"
          name="descricao"
          required
          placeholder="Descreva os detalhes de um gasto..."
          className="h-32 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="valor"
          className="text-sm font-semibold text-zinc-400 ml-1"
        >
          Valor
        </label>
        <input
          type="number"
          id="valor"
          name="valor"
          min="0"
          step="1"
          required
          placeholder="Ex: 1500"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98]"
      >
        Criar Gasto
      </button>

      <button
        type="reset"
        className="text-center text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300"
      >
        Limpar campos
      </button>
    </form>
  );
}
