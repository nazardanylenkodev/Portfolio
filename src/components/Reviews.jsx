import React from 'react';

export default function Reviews() {
  const stats = [
    { number: "10+", label: "Завершених проєктів" },
    { number: "100%", label: "Mobile-First підхід" },
    { number: "< 1с", label: "Швидкість завантаження" },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-6 text-center">
            <div className="text-4xl font-extrabold text-sky-400">{stat.number}</div>
            <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}