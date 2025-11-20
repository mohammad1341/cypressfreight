export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span>© {year} Cypress Freight. All rights reserved.</span>
        <span>Serving businesses across Canada &amp; the U.S.</span>
      </div>
    </footer>
  );
}
