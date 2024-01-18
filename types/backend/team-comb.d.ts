/**
 * @file types/backend/team-comb.d.ts
 * @description 队伍组合类型定义
 * @since 0.0.1
 */

/**
 * @description 队伍组合类型定义
 * @since 0.0.1
 * @namespace TeamComb
 * @memberof Backend
 */
declare namespace Backend.TeamComb {
  /**
   * @description 队伍组合返回类型定义
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
   * @description 队伍组合数据类型定义
   * @since 0.0.1
   * @interface Data
   * @property {number} Floor - 楼层
   * @property {Backend.Base.RatesMap<string>} Up - 上半
   * @property {Backend.Base.RatesMap<string>} Down - 下半
   * @return Data
   */
  interface Data {
    Floor: number
    Up: Backend.Base.RatesMap<string>
    Down: Backend.Base.RatesMap<string>
  }
}