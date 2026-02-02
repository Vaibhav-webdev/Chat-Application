"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (searchParams.get("show") === "true") {
      setIsSignup(true);
    }
  }, [searchParams]);

  async function handleLogin() {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) toast.error("Invalid credentials");
    else {
      toast.success("Login successful");
      router.push("/");
    }
  }

  async function handleSignup() {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Account created");
      setIsSignup(false);
    } else toast.error("Signup failed");
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* BACKGROUND (UNCHANGED) */}
      <div className="absolute inset-0 bg-[#017092]" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#3a1f46] opacity-40 blur-[180px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-between px-60">
        {/* LEFT BRAND */}
        <div className="flex flex-col items-center">
          <div className="text-[8vw]">💬</div>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            PigioChat
          </h1>
          <p className="text-cyan-200/70 text-sm">
            Fast. Simple. Secure.
          </p>
        </div>

        {/* AUTH CARD */}
        <div className="w-[420px] rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>

          <div className="space-y-4">
            {isSignup && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-cyan-400/20 px-4 py-3 text-white placeholder-cyan-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-black/40 border border-cyan-400/20 px-4 py-3 text-white placeholder-cyan-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg bg-black/40 border border-cyan-400/20 px-4 py-3 text-white placeholder-cyan-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
            />

            <button
              onClick={isSignup ? handleSignup : handleLogin}
              className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 py-3 font-semibold text-black hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-cyan-500/20"
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-cyan-200/60">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignup(false)}
                  className="text-cyan-300 hover:text-cyan-200 hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsSignup(true)}
                  className="text-cyan-300 hover:text-cyan-200 hover:underline"
                >
                  Sign up
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
