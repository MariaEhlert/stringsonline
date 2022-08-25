import { Route, Routes } from "react-router-dom"
import { BrandDetails } from "../Brands/Brands"
import { ProductDetails } from "../Products/ProductDetails"
import { ProductList } from "../Products/ProductList"

import { Home,  } from "../Sites/Home/Home"
import { Login } from "../Sites/Login/Login"
import { NoPage } from "../Sites/NoPage/NoPage"
import { TradingConditions } from "../Sites/TradingConditions/TradingConditions"

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      {/*SideNav bliver kaldt i App.jsx og har ikke en path */}
      {/* Derfor er product's path sådan  */}
      <Route path='/product/:id' element={<ProductList/>} >
        <Route path=":id" element={<ProductDetails/>}/>
      </Route>
      {/* virker ikke  */}
      <Route path="/login" element={<Login />} />
      <Route path="/tradingConditions" element={<TradingConditions />} />  
      {/*SideNav bliver kaldt i App.jsx og har ikke en path */}
      {/* Derfor er brands's path sådan  */}   
      <Route path="/brands/:id" element={<BrandDetails/>} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}