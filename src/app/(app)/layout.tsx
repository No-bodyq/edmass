import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-[#F4F7FF] overflow-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
