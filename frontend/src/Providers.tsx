"use client";

import { wagmiAdapter, projectId } from "@/config";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { createAppKit } from "@reown/appkit/react";
import { arbitrum, base, optimism, polygon } from "@reown/appkit/networks";
import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Set up queryClient
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // With SSR, we usually want to set some default staleTime above 0 to avoid refetching immediately on the client
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
  if (isServer) {
    console.log("server queryClient created", time);
    return makeQueryClient(); // Server: always make a new query client
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient(); // Browser: make a new query client if we don't already have one. This is very important, so we don't re-make a new client if React suspends during the initial render. This may not be needed if we have a suspense boundary BELOW the creation of the query client
      console.log("browser queryClient created");
    } else {
      console.log("browser queryClient already exists");
    }
    return browserQueryClient;
  }
}

// set up AppKit
if (!projectId) {
  throw new Error("Project ID is not defined");
}

const metadata = {
  name: "Test App",
  description: "My NextJS test website",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [arbitrum, base, optimism, polygon],
  defaultNetwork: polygon,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export default function Providers({ children, cookies }: { children: React.ReactNode; cookies: string | null }) {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
  console.log("Providers.tsx", time);

  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies);
  const queryClient = getQueryClient();

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
