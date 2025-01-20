import { apiPaths } from '@/constants/apiPatUrl'
import apiService from '@/api/apiService'

export function useArticleApi() {
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

  return {
    func_getMediaGet,
    func_getAllDetailsGet,
  }
}
