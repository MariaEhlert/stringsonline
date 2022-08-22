import { Route, Routes } from "react-router-dom"
import { Home } from "../Sites/Home/Home"
import { Login } from "../Sites/Login/Login"
import { NoPage } from "../Sites/NoPage/NoPage"
import { TradingConditions } from "../Sites/TradingConditions/TradingConditions"

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tradingConditions" element={<TradingConditions />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}