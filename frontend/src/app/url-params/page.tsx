import Link from "next/link";

export default function page() {
  const links = [
    { title: "Link 1", slug: "link1" },
    { title: "Link 2", slug: "link2" },
    { title: "Link 3", slug: "link3" },
  ];
  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="componentContainer">
          <p>page.tsx</p>
          {links.map((i) => (
            <Link key={i.slug} href={`/pathname/${i.slug}`}>
              {i.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
