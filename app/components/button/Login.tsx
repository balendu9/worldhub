"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { inAppWallet } from "thirdweb/wallets";
import { useConnect } from "thirdweb/react";
import { client } from "@/lib/thirdweb/client";
import { Loader2 } from "lucide-react";

export function LoginButton() {
  const { data: session, status } = useSession();
  const { connect } = useConnect();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      // Ensure the user is signed in before connecting the wallet
      if (!session) {
        const result = await signIn("worldcoin", { redirect: false });

        if (result?.error) {
          throw new Error(result.error);
        }

        // Wait for the session to update
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Small delay for session propagation
      }

      if (!session?.user?.name) {
        throw new Error("Session or user information is missing.");
      }

      await connect(async () => {
        const wallet = inAppWallet();
        await wallet.connect({
          client,
          strategy: "auth_endpoint",
          payload: session?.user?.name ?? "nothing",
        });
        return wallet;
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  

  if (status === "loading") {
    return (
      <button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {!session ? (
        <button
          onClick={handleConnectWallet}
          disabled={isConnecting}
          className="w-1/2 rounded-[20px] bg-zinc-900 text-white h-[45px]"
        >
          Sign in with thirdweb
        </button>
      ) : (
        <button
          onClick={handleSignOut}
          className="w-1/2 rounded-[20px] bg-zinc-900 text-white h-[45px]"
        >
          Sign Out
        </button>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
