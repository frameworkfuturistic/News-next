import { AdminSidebar } from "@/components/AdminSidebar/AdminSidebar";

export default function AdminRootLayout({ children }) {
    return (
        <html lang="en">
            <body className={"grid grid-cols-12"}>
                <div className="col-span-2">
                    <AdminSidebar />
                </div>
                <div className="col-span-10">
                    {children}
                </div>

            </body>
        </html>
    )
}