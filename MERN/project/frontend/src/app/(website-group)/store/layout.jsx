import BrandFilter from "@/components/website/BrandFilter";
import Category from "@/components/website/Category";
import ColorFilter from "@/components/website/ColorFilter";
import PriceFilter from "@/components/website/PriceFilter";
import { getBrands, getCategories, getColors } from "@/library/api-call";


export default async function RootLayout({ children }) {
  const categoryJSON = await getCategories(null)
  const categories = categoryJSON.data

  const brandJSON = await getBrands(null)
  const brands = brandJSON.data


  const colorJSON = await getColors(null)
  const colors = colorJSON.data
  return (
    <html lang="en">
      <body>
        <div className="max-w-7xl  mx-auto ">
          <div className="w-full bg-[#01A49E]  py-4">

          </div>
          <div className="w-full bg-white shadow-2xl my-2 px-2 py-4 ">
            Home / Shop / Mobile Phone
          </div>
          <img src="banner.png" alt="" className="mx-auto " />
          <div className="grid grid-cols-7 space-x-4 px-4 py-6">
            <div className="col-span-2 p-2">
              <Category categories={categories} />
              <BrandFilter brands={brands} />
              <ColorFilter colors={colors} />
              <PriceFilter/>
            </div>
            <div className="col-span-5  p-2">
              {children}
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}
