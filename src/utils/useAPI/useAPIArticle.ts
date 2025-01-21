import { apiPaths } from '@/constants/apiPatUrl'
import apiService from '@/api/apiService'

export function useArticleApi() {
  //全部圖片
  const func_getMediaGet: any = async () => {
    const _route = apiPaths.getAllMediaGet
    let _result = null
    try {
      _result = await apiService.get(_route)
      return _result.data
    } catch (error) {
      console.log(error)
    }
  }

  // 全部標籤
  const func_getAllDetailsGet: any = async () => {
    const _route = apiPaths.getAllDetailsGet
    let _result = null
    try {
      _result = await apiService.get(_route)
      return _result.data
    } catch (error) {
      console.log(error)
    }
  }

  //全部頁面
  const func_getAllPagesGet: any = async () => {
    const _route = apiPaths.getAllPagesGet
    let _result = null
    try {
      _result = await apiService.get(_route)
      return _result.data
    } catch (error) {
      console.log(error)
    }
  }

  //全部文章

  const func_getArticlePosts: any = async () => {
    const _route = apiPaths.getArticlePosts
    let _result = null
    try {
      _result = await apiService.get(_route)
      return _result.data
    } catch (error) {
      console.log(error)
    }
  }

  return {
    func_getMediaGet,
    func_getAllDetailsGet,
    func_getAllPagesGet,
    func_getArticlePosts,
  }
}
