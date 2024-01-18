/**
 * @file types/backend/avatar-hold.d.ts
 * @description 角色持有率类型定义
 * @since 0.0.1
 */

/**
 * @description 角色持有率类型定义
 * @since 0.0.1
 * @namespace AvatarHold
 * @memberof Backend
 */
declare namespace Backend.AvatarHold {
  /**
   * @description 角色持有率返回类型定义
   * @since 0.0.1
   * @interface Response
   * @extends Backend.Base.Response
   * @property {Data}
   * @return Response
   */
  interface Response extends Backend.Base.Response {
    data: Data
  }

  /**
   * @description 角色持有率数据类型定义
   * @since 0.0.1
   * @interface Data
   * @property {number} HoldingRate - 持有率
   * @property {Backend.Base.RatesMap<number>} Constellations - 命座
   * @property {number} AvatarId - 角色ID
   * @return Data
   */
  interface Data {
    HoldingRate: number
    Constellations: Backend.Base.RatesMap<number>
    AvatarId: number
  }
}