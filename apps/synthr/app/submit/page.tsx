"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/lib/components/ui/button";
import { Badge } from "@/lib/components/ui/badge";
import { Send, ArrowLeft, CheckCircle, AlertCircle, Link2, Tag, FileText, User } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  "Image Generation",
  "UI/UX Design",
  "Logo & Branding",
  "Photo Editing",
  "Vector & Illustration",
  "3D & Motion",
  "Color & Typography",
  "Productivity",
  "Wireframing",
  "Presentation",
];

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.url || !formData.category || !formData.description) {
      setStatus("error");
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!formData.url.startsWith("http")) {
      setStatus("error");
      setMessage("Please enter a valid URL starting with http:// or https://");
      return;
    }

    // Create a mailto link with the submission details
    const subject = encodeURIComponent(`Tool Submission: ${formData.name}`);
    const body = encodeURIComponent(
      `Tool Name: ${formData.name}\n` +
      `URL: ${formData.url}\n` +
      `Category: ${formData.category}\n` +
      `Description: ${formData.description}\n` +
      `Submitter Email: ${formData.email || "Not provided"}`
    );

    // In a real setup, you would POST to an API endpoint
    // For now, we open the user's email client with a pre-filled message
    window.location.href = `mailto:hello@synthr.online?subject=${subject}&body=${body}`;

    setStatus("success");
    setMessage("Thank you! Your email client should open with the submission details.");
    setFormData({ name: "", url: "", category: "", description: "", email: "" });
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/tools/"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Directory
        </Link>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#F5F5F5] sm:text-5xl">
          Submit a Tool
        </h1>
        <p className="mt-4 text-lg text-[#A3A3A3]">
          Know a great AI design tool that should be on Synthr? Let us know.
        </p>
      </div>

      <div className="rounded-2xl border border-[#262626] bg-[#171717] p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#F5F5F5]">
              <User className="h-4 w-4 text-[#A855F7]" />
              Tool Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Midjourney"
              className="mt-2 h-10 w-full rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 text-sm text-[#F5F5F5] placeholder:text-[#737373] focus:border-[#A855F7] focus:outline-none focus:ring-1 focus:ring-[#A855F7]"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#F5F5F5]">
              <Link2 className="h-4 w-4 text-[#A855F7]" />
              Website URL *
            </label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="https://..."
              className="mt-2 h-10 w-full rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 text-sm text-[#F5F5F5] placeholder:text-[#737373] focus:border-[#A855F7] focus:outline-none focus:ring-1 focus:ring-[#A855F7]"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#F5F5F5]">
              <Tag className="h-4 w-4 text-[#A855F7]" />
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-2 h-10 w-full rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 text-sm text-[#F5F5F5] focus:border-[#A855F7] focus:outline-none focus:ring-1 focus:ring-[#A855F7]"
              required
            >
              <option value="" disabled>Select a category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#F5F5F5]">
              <FileText className="h-4 w-4 text-[#A855F7]" />
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="What does this tool do? Why should designers care?"
              rows={4}
              className="mt-2 w-full rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#737373] focus:border-[#A855F7] focus:outline-none focus:ring-1 focus:ring-[#A855F7]"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#F5F5F5]">
              <User className="h-4 w-4 text-[#A855F7]" />
              Your Email (optional)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="So we can follow up with questions"
              className="mt-2 h-10 w-full rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 text-sm text-[#F5F5F5] placeholder:text-[#737373] focus:border-[#A855F7] focus:outline-none focus:ring-1 focus:ring-[#A855F7]"
            />
          </div>

          <Button type="submit" variant="accent" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Submit Tool
          </Button>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-400">
              <CheckCircle className="h-4 w-4" />
              {message}
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
              <AlertCircle className="h-4 w-4" />
              {message}
            </div>
          )}
        </form>
      </div>

      <div className="mt-8 rounded-xl border border-[#262626] bg-[#171717] p-6">
        <h3 className="text-sm font-semibold text-[#F5F5F5]">What happens next?</h3>
        <ul className="mt-3 space-y-2 text-sm text-[#A3A3A3]">
          <li className="flex items-start gap-2">
            <Badge variant="outline">1</Badge>
            We review every submission personally.
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline">2</Badge>
            If approved, we add the tool within 1-2 weeks.
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline">3</Badge>
            We will email you when it goes live.
          </li>
        </ul>
      </div>
    </div>
  );
}
