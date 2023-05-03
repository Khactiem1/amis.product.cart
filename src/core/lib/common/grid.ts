import { ApiService } from '@/core/public_api';
import { Utils } from './utils';
import type BaseApi from '@/api/base_api';

/** 
 * Chứa toàn bộ các base thêm sửa xoá được xây dựng
 * Khắc Tiềm - 08.03.2023
 */
export class Grid extends Utils{
  /** Api được truyền vào từ lớp khởi tạo */
  public api: BaseApi;

  /** Key word tìm kiếm mặc định */
  public keyword:string = '';

  constructor(api: BaseApi){
    super();
    this.api = api;
  }
  
  /** Hàm gọi api */
  public apiService = new ApiService();
}