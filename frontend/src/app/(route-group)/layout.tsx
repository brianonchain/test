export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  console.log("sublayout rendered once");
  return (
    <div>
      <div className="bg-blue-900 text-white">Route-Group Layout</div>
      {children}
    </div>
  );
}
