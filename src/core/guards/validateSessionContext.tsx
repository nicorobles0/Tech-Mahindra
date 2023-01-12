import { createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const WithPrivateRouteContext = createContext<any>(null);
/**
 * Context para validar sesión de usuario activa
 * @param props 
 * @returns Providers de acceso
 */
const WithPrivateRoute = (props: any) => {
  
  const router = useRouter();
  useEffect(() => {
    const lcStorge = window?.localStorage || null;
    const clearSession = () => {
      localStorage.clear();
      // router.push("/login");
    };
    if (lcStorge === null || lcStorge.getItem("usT") === null) {
      clearSession();
    }
    const checkSession = async () => {
      const response = await axios.get(
        `/api/user?tok=${localStorage.getItem("usT")}`
      );
      return response;
    };
    const result = checkSession().then( (resp) => {
      console.log("respuesta", resp)
    } ).catch(() => {
      console.log("Result", result);
    });
    
  }, []);

  return <WithPrivateRouteContext.Provider value={{}} />;
};
export {WithPrivateRouteContext, WithPrivateRoute};