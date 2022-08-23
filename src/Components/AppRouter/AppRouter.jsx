import { Route, Routes } from "react-router-dom"
import { BrandDetails, Brands } from "../Brands/Brands"

import { Home, ProductList } from "../Sites/Home/Home"
import { Login } from "../Sites/Login/Login"
import { NoPage } from "../Sites/NoPage/NoPage"
import { TradingConditions } from "../Sites/TradingConditions/TradingConditions"

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tradingConditions" element={<TradingConditions />} />
      <Route path="/product" element={<ProductList/>}>
      </Route>

      <Route path="/brands" element={<Brands/>}>
        <Route path=":id" element={<BrandDetails/>}/>
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}