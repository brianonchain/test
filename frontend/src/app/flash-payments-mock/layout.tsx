import Web3AuthProvider from "./_components/Web3AuthProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", { hour12: false }) + `.${date.getMilliseconds()}`;
  console.log("/flash layout.tsx", time);
  return <Web3AuthProvider>{children}</Web3AuthProvider>;
}
