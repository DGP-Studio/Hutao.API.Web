/**
 * @file types/frontend/snackbar.d.ts
 * @description 前端 snackbar 组件类型声明
 * @since 0.0.1
 */

/**
 * @description snackbar 组件
 * @since 0.0.1
 * @namespace Snackbar
 * @memberof Frontend
 */
declare namespace Frontend.Snackbar {
  /**
   * @description snackbar 组件参数
   * @since 0.0.1
   * @interface Params
   * @property {string} text snackbar 文本
   * @property {string} [color] snackbar 颜色
   * @property {number} [timeout] snackbar 显示时间
   * @return Params
   */
  interface Params {
    text: string;
    color?: string;
    timeout?: number;
  }
}
