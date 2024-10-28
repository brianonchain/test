import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { polygon, optimism, arbitrum, base } from "@reown/appkit/networks";

export const projectId = process.env.NEXT_PUBLIC_REOWN_ID;

if (!projectId) throw new Error("Project ID is not defined");

export const networks = [polygon, optimism, arbitrum, base];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId: projectId,
  networks: networks,
});

export const config = wagmiAdapter.wagmiConfig;
