import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";

export default function DashboardRootLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen p-6 rainbow-mesh">
        <GlassPane className="flex items-center w-full h-full ">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal" />
      </body>
    </html>
  );
}
