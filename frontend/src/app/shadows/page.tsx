import Custom from "./_components/Custom";

export default function page() {
  return (
    <>
      <Custom />
      <div className="p-12 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-[180px] gap-16">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
      </div>

      <div className="p-12 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-[180px] gap-16 bg-black">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
      </div>
    </>
  );
}