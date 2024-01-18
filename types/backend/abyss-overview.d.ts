/**
 * @file types/backend/abyss-overview.d.ts
 * @description 深渊总览类型定义
 * @since 0.0.1
 */

/**
 * @description 深渊总览类型定义
 * @since 0.0.1
 * @namespace AbyssOverview
 * @memberof Backend
 */
declare namespace Backend.AbyssOverview {
  /**
   * @description 深渊总览返回类型定义
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
   * @description 深渊总览数据类型定义
   * @since 0.0.1
   * @interface Data
   * @property {number} ScheduleId - 深渊期数
   * @property {number} RecordTotal - 总记录数
   * @property {number} SpiralAbyssTotal - 总计深渊记录
   * @property {number} SpiralAbyssFullStar - 满星深渊记录数
   * @property {number} SpiralAbyssPassed - 通关深渊记录数
   * @property {number} SpiralAbyssStarTotal - 总星数
   * @property {number} SpiralAbyssBattleTotal - 总战斗次数
   * @property {number} Timestamp - 时间戳
   * @property {number} TimeTotal - 总耗时
   * @property {number} TimeAverage - 平均耗时
   * @return Data
   */
  interface Data {
    ScheduleId: number
    RecordTotal: number
    SpiralAbyssTotal: number
    SpiralAbyssFullStar: number
    SpiralAbyssPassed: number
    SpiralAbyssStarTotal: number
    SpiralAbyssBattleTotal: number
    Timestamp: number
    TimeTotal: number
    TimeAverage: number
  }
}