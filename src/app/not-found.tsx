import Link from "next/link";

export default function NotFound() {
  return (
    <main className="home">
      <div className="home-hero">
        <h1>🙈 Hov, den side findes ikke</h1>
        <p>
          <Link href="/" className="btn btn-primary btn-lg">
            Gå til forsiden
          </Link>
        </p>
      </div>
    </main>
  );
}
