import { createBrowserRouter } from "react-router-dom";
import Clicker from "../page/Clicker";

export const router = createBrowserRouter([{
    path: "/Clicker",
    element: <Clicker/>
}])