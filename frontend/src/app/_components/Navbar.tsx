import Link from "next/link";

export const links = [
  { title: "Shadows", path: "/shadows" },
  { title: "Suspense", path: "/suspense" },
  { title: "Todo-NextJS", path: "/todo/nextjs" },
  { title: "Todo-ReactQuery", path: "/todo/reactquery" },
  { title: "Route Group", path: "/route-group" },
  { title: "URL Params", path: "/url-params" },
  { title: "URL Search Parms", path: "/url-search-params" },
  { title: "Cookies", path: "/cookies" },
];

export default function Navbar() {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      {links.map((i) => (
        <Link key={i.path} href={i.path}>
          <div className="px-3 py-2 border border-slate-400 rounded-md whitespace-nowrap text-slate-600 hover:bg-slate-200">{i.title}</div>
        </Link>
      ))}
    </div>
  );
}
