import "./globals.css"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({children}:{children:React.ReactNode}){

return(

<html lang="en">
<body className="bg-black text-white">

<Navbar/>

<div className="flex">

<Sidebar/>

<main className="p-6 w-full">
{children}
</main>

</div>

</body>
</html>

)

}
