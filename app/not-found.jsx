import Link from "next/link";

// Custom 404 Not Found page component
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-200 p-6">
      <h1 className="text-4xl font-bold text-black">404 - Not Found</h1>
      <p className="mt-4 text-lg text-black">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 text-grey-100 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
