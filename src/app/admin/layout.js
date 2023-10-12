import { AdminSidebar } from "@/components/AdminSidebar/AdminSidebar";

export default function AdminRootLayout({ children }) {
    return (
        <html lang="en">
            <body className={"grid grid-cols-12"}>
                <div className="col-span-2 w-full">
                    <AdminSidebar />
                </div>
                <div className="col-span-10 bg-gray-100 p-5">
                    {children}
                </div>

            </body>
        </html>
    )
}