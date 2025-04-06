import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Registrierung erfolgreich!");
        setForm({ username: "", email: "", password: "" });
      } else {
        setMessage("❌ Fehler: " + data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Serverfehler");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Registrieren</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Benutzername</label>
          <input
            name="username"
            placeholder="Benutzername"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>E-Mail</label>
          <input
            name="email"
            placeholder="E-Mail"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Passwort</label>
          <input
            name="password"
            placeholder="Passwort"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrieren</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
