"use client";

import { useMemo, useRef, useState } from "react";
import { services } from "@/lib/services";

export function ServiceSearch({
  onSelect,
}: {
  onSelect: (service: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const blurTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return services;
    const q = query.toLowerCase();
    return services.filter((s) => s.toLowerCase().includes(q));
  }, [query]);

  function submit(service?: string) {
    const value = (service ?? query).trim();
    if (!value) return;
    setQuery(value);
    setOpen(false);
    onSelect(value);
  }

  return (
    <div className="relative">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            blurTimeout.current = setTimeout(() => setOpen(false), 150);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          placeholder="For example: bathroom renovation"
          className="w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3.5 text-navy-900 outline-none transition-colors focus:border-accent-500"
        />
        <button
          type="button"
          onClick={() => submit()}
          aria-label="Search"
          className="flex shrink-0 cursor-pointer items-center justify-center rounded-xl bg-accent-500 px-5 text-white transition-colors hover:bg-accent-600"
        >
          →
        </button>
      </div>

      {open && filtered.length > 0 && (
        <div
          className="absolute inset-x-0 top-full z-20 mt-2 max-h-72 overflow-auto rounded-xl bg-white p-2 shadow-xl ring-1 ring-navy-900/10"
          onMouseDown={(e) => {
            // prevent input's onBlur from closing the list before the click registers
            e.preventDefault();
            if (blurTimeout.current) clearTimeout(blurTimeout.current);
          }}
        >
          <p className="px-3 pt-1 pb-1.5 text-xs font-medium text-slate-500">
            Popular services
          </p>
          {filtered.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => submit(s)}
              className="block w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm font-medium text-navy-800 transition-colors hover:bg-cream-100 hover:text-accent-600"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
