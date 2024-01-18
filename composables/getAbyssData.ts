/**
 * @file composables/getAbyssData.ts
 * @description 获取深渊数据
 * @since 0.0.1
 */

import showSnackbar from '~/components/snackbar'

/**
 * @description 获取深渊概览
 * @since 0.0.1
 * @function getAbyssOverview
 * @returns {Promise<Backend.AbyssOverview.Data>}
 */
export async function getAbyssOverview(): Promise<Backend.AbyssOverview.Data> {
  const res = await useFetch<Backend.AbyssOverview.Response>(`/api/Overview`)
  await res.refresh()
  const dataRaw = res.data.value
  if (dataRaw === null) {
    // todo Err 处理
    throw new Error('获取深渊概览失败')
  }
  // todo 优化 hint
  showSnackbar({
    text: `[${dataRaw.retcode}] ${dataRaw.message}`,
    color: 'success'
  });
  return dataRaw.data
}

/**
 * @description 获取深渊角色上场率
 * @since 0.0.1
 * @todo 待使用
 * @function getAvatarUp
 * @returns {Promise<Backend.AvatarUp.Data>}
 */
export async function getAvatarUp(): Promise<Backend.AvatarUp.Data> {
  const res = await useFetch<Backend.AvatarUp.Response>(`/api/Avatar/AttendanceRate`)
  await res.refresh()
  if (res.data.value === null) {
    // todo Err 处理
    throw new Error('获取深渊角色上场率失败')
  }
  return res.data.value.data
}

/**
 * @description 获取深渊角色使用率
 * @since 0.0.1
 * @todo 待使用
 * @function getAvatarUse
 * @returns {Promise<Backend.AvatarUse.Data>}
 */
export async function getAvatarUse(): Promise<Backend.AvatarUse.Data> {
  const res = await useFetch<Backend.AvatarUse.Response>(`/api/Avatar/UtilizationRate`)
  await res.refresh()
  if (res.data.value === null) {
    // todo Err 处理
    throw new Error('获取深渊角色使用率失败')
  }
  return res.data.value.data
}

/**
 * @description 获取深渊角色持有率
 * @since 0.0.1
 * @todo 待使用
 * @function getAvatarHold
 * @returns {Promise<Backend.AvatarHold.Data>}
 */
export async function getAvatarHold(): Promise<Backend.AvatarHold.Data> {
  const res = await useFetch<Backend.AvatarHold.Response>(`/api/Avatar/HoldingRate`)
  await res.refresh()
  if (res.data.value === null) {
    // todo Err 处理
    throw new Error('获取深渊角色持有率失败')
  }
  return res.data.value.data
}

/**
 * @description 获取深渊队伍搭配
 * @since 0.0.1
 * @todo 待使用
 * @function getTeamComb
 * @returns {Promise<Backend.TeamComb.Data>}
 */
export async function getTeamComb(): Promise<Backend.TeamComb.Data> {
  const res = await useFetch<Backend.TeamComb.Response>(`/api/Team/Combination`)
  await res.refresh()
  if (res.data.value === null) {
    // todo Err 处理
    throw new Error('获取深渊队伍搭配失败')
  }
  return res.data.value.data
}