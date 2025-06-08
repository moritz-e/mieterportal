'use client';

export default function KontaktPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Nachricht gesendet');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Ihr Name" className="border px-2 py-1 w-full" />
        <input type="email" placeholder="Ihre E-Mail" className="border px-2 py-1 w-full" />
        <textarea placeholder="Ihre Nachricht" className="border px-2 py-1 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Absenden</button>
      </form>
    </div>
  );
}
