import { apiPaths } from '@/constants/apiPatUrl'
import apiService from '@/api/apiService'

export function useCommonApi() {
  type Func_createCommentPostParams = {
    comment: string
    author: number
    email: string
    url: string | ''
    submit: string
    comment_post_ID: number
    comment_parent: number
  }

  type Func_createMyPluginPostsParams = {
    comment: string
    author: string
    email: string
  }

  //新增留言
  const func_createCommentPost: any = async (params: Func_createCommentPostParams) => {
    const _route = apiPaths.createCommentPost
    const _params = params
    let _result = null
    try {
      _result = await apiService.post(_route, _params)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  //無權限 新增留言
  const func_createMyPluginPostsParams: any = async (params: Func_createMyPluginPostsParams) => {
    const _route = apiPaths.createMyPluginPostsParams
    const _params = params
    let _result = null
    try {
      _result = await apiService.post(_route, _params)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return { func_createCommentPost, func_createMyPluginPostsParams }
}
