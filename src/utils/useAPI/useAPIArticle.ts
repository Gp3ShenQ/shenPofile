import { apiPaths } from '@/constants/apiPatUrl'
import apiService from '@/api/apiService'

export function useArticleApi() {
  const func_getMediaGet: any = async () => {
    const _route = apiPaths.getMediaGet
    let _result = null
    try {
      _result = await apiService.get(_route)
      return _result
    } catch (error) {
      console.log(error)
    }
  }

  return {
    func_getMediaGet,
  }
}
