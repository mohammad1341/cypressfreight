"use client";

import { useState, FormEvent } from "react";


export default function QuoteForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    // فعلاً فقط پیام می‌دهد؛ بعداً می‌تونیم وصلش کنیم به ایمیل/فرم‌اسپری
    setTimeout(() => {
      alert("Thank you! We have received your request and will contact you shortly.");
      setSending(false);
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
    >
      <div className="flex flex-col gap-1">
        <label className="font-medium">Full Name</label>
        <input
          required
          name="name"
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Company</label>
        <input
          name="company"
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Email</label>
        <input
          required
          type="email"
          name="email"
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Phone</label>
        <input
          name="phone"
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Pickup City / Country</label>
        <input
          required
          name="pickup"
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Delivery City / Country</label>
        <input
          required
          name="delivery"
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <label className="font-medium">Type of Freight</label>
        <input
          name="freightType"
          placeholder="FTL, LTL, Reefer, Dry Van, etc."
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <label className="font-medium">Shipment Details</label>
        <textarea
          name="details"
          rows={4}
          placeholder="Weight, dimensions, number of pallets, preferred dates, special requirements…"
          className="rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {sending ? "Sending..." : "Submit Quote Request"}
        </button>
      </div>
    </form>
  );
}
