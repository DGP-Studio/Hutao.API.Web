/**
 * @file types/backend/base.d.ts
 * @description 后端基础类型定义
 * @since 0.0.1
 */

/**
 * @description 后端基础类型定义
 * @since 0.0.1
 * @namespace Base
 * @memberof Backend
 */
declare namespace Backend.Base {
  /**
   * @description 返回类型定义
   * @since 0.0.1
   * @interface Response
   * @property {string} retcode - 返回码
   * @property {string} message - 返回信息
   * @property {any} data - 返回数据
   * @return Response
   */
  interface Response {
    retcode: string
    message: string
    data: any
  }

  /**
   * @description 百分比相关类型返回
   * @since 0.0.1
   * @interface RatesMap
   * @template T - Item 类型
   * @property {T} Item - Item
   * @property {number} Rate - 百分比
   * @return RateMap
   */
  type RatesMap<T> = Array<{
    Item: T
    Rate: number
  }>

  /**
   * @description 武器类型枚举
   * @since 0.0.1
   * @enum {string} WeaponType
   * @property {string} sword - 单手剑
   * @property {string} claymore - 双手剑
   * @property {string} pole - 长柄武器
   * @property {string} bow - 弓
   * @property {string} catalyst - 书
   * @return WeaponType
   */
  const enum WeaponType {
    sword = 'sword',
    claymore = 'claymore',
    pole = 'pole',
    bow = 'bow',
    catalyst = 'catalyst'
  }
}