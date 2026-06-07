import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
      <h1 className="text-6xl font-bold text-[#A855F7]">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-[#F5F5F5]">Page not found</h2>
      <p className="mt-4 text-[#A3A3A3]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#A855F7] px-6 py-3 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}
