import { ModuleName } from "@/core/public_api";
import BaseApi from "../base_api";
import axiosAPI from "..";

export default class ProductApi extends BaseApi {
  constructor(){
    super(ModuleName.Product + 's');
  }

  /**
   * API Change Password
   * Khắc Tiềm - 08.03.2023
   */
  public getProductHome = (keyWord: any) => {
    return axiosAPI.post(`/Products/GetProductHome`, keyWord)
  }

  /**
   * API Change Password
   * Khắc Tiềm - 08.03.2023
   */
  public getProductPrice = () => {
    return axiosAPI.get(`/Products/GetProductPrice`)
  }

  /**
   * API Change Password
   * Khắc Tiềm - 08.03.2023
   */
  public getProductHot = () => {
    return axiosAPI.get(`/Products/GetProductHot`)
  }
}