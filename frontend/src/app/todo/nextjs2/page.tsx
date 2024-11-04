import Client1 from "./_components/Client1";

export default async function page() {
  console.log("/nextjs2 page.tsx");
  return (
    <div className="pageContainer">
      <div className="pageSubcontainer">
        <div className="componentContainer">
          <div>page.tsx</div>
        </div>
        <Client1 />
      </div>
    </div>
  );
}
