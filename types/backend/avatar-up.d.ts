/**
 * @file types/backend/avatar-up.d.ts
 * @description 角色上场率类型定义
 * @since 0.0.1
 */

/**
 * @description 角色上场率类型定义
 * @since 0.0.1
 * @namespace AvatarUp
 * @memberof Backend
 */
declare namespace Backend.AvatarUp {
  /**
   * @description 角色上场率返回类型定义
   * @since 0.0.1
   * @interface Response
   * @extends Backend.Base.Response
   * @property {Data} data - 返回数据
   * @return Response
   */
  interface Response extends Backend.Base.Response {
    data: Data
  }

  /**
   * @description 角色上场率数据类型定义
   * @since 0.0.1
   * @interface Data
   * @property {number} Floor - 楼层
   * @property {Backend.Base.RatesMap<number>} Ranks - 上场率排行
   * @return Data
   */
  interface Data {
    Floor: number
    Ranks: Backend.Base.RatesMap<number>
  }
}