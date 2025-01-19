const apiPaths: { [key: string]: string } = {
  //     Posts 相關 API 端點
  // 取得所有文章：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/posts
  getArticlePosts: '/wp-json/wp/v2/posts',

  // 新增一篇文章：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/posts
  createArticlePosts: '/wp-json/wp/v2/posts',

  // 取得指定文章：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/posts/{id}
  getArticleGet: '/wp-json/wp/v2/posts/{id}',

  // 更新指定文章：PUT https://kuanjung.synology.me/wordpress/wp-json/wp/v2/posts/{id}
  updateArticlePut: '/wp-json/wp/v2/posts/{id}',

  // 刪除指定文章：DELETE https://kuanjung.synology.me/wordpress/wp-json/wp/v2/posts/{id}
  deleteArticleDelete: '/wp-json/wp/v2/posts/{id}',

  // Pages 相關 API 端點
  // 取得所有頁面：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/pages

  // 新增一個頁面：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/pages

  // 取得指定頁面：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/pages/{id}

  // 更新指定頁面：PUT https://kuanjung.synology.me/wordpress/wp-json/wp/v2/pages/{id}

  // 刪除指定頁面：DELETE https://kuanjung.synology.me/wordpress/wp-json/wp/v2/pages/{id}

  // Categories 相關 API 端點
  // 取得所有分類：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/categories

  // 新增一個分類：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/categories

  // 取得指定分類：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/categories/{id}

  // 更新指定分類：PUT https://kuanjung.synology.me/wordpress/wp-json/wp/v2/categories/{id}

  // 刪除指定分類：DELETE https://kuanjung.synology.me/wordpress/wp-json/wp/v2/categories/{id}

  // Tags 相關 API 端點
  // 取得所有標籤：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/tags

  // 新增一個標籤：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/tags

  // 取得指定標籤：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/tags/{id}

  // 更新指定標籤：PUT https://kuanjung.synology.me/wordpress/wp-json/wp/v2/tags/{id}

  // 刪除指定標籤：DELETE https://kuanjung.synology.me/wordpress/wp-json/wp/v2/tags/{id}

  // Comments 相關 API 端點
  // 取得所有評論：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/comments

  // 新增一條評論：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/comments

  // 取得指定評論：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/comments/{id}

  // 更新指定評論：PUT https://kuanjung.synology.me/wordpress/wp-json/wp/v2/comments/{id}

  // 刪除指定評論：DELETE https://kuanjung.synology.me/wordpress/wp-json/wp/v2/comments/{id}

  // Media 相關 API 端點
  // 取得所有媒體項目：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/media
  getAllMediaGet: '/wp-json/wp/v2/media',

  // 上傳一個媒體項目：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/media
  uploadMediaPost: '/wp-json/wp/v2/media',

  // 取得指定媒體項目：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/media/{id}
  getMediaIdGet: '/wp-json/wp/v2/media/{id}',

  // 更新指定媒體項目：PUT https://kuanjung.synology.me/wordpress/wp-json/wp/v2/media/{id}

  // 刪除指定媒體項目：DELETE https://kuanjung.synology.me/wordpress/wp-json/wp/v2/media/{id}

  // Users 相關 API 端點
  // 取得所有用戶：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/users

  // 新增一個用戶：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/users

  // 取得指定用戶：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/users/{id}

  // 更新指定用戶：PUT https://kuanjung.synology.me/wordpress/wp-json/wp/v2/users/{id}

  // 刪除指定用戶：DELETE https://kuanjung.synology.me/wordpress/wp-json/wp/v2/users/{id}

  // Taxonomies 相關 API 端點
  // 取得所有分類法：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/taxonomies

  // 取得指定分類法：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/taxonomies/{taxonomy}

  // Settings 相關 API 端點
  // 取得網站設置：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/settings

  // 更新網站設置：POST https://kuanjung.synology.me/wordpress/wp-json/wp/v2/settings

  // Themes 相關 API 端點
  // 取得所有主題：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/themes

  // 取得指定主題：GET https://kuanjung.synology.me/wordpress/wp-json/wp/v2/themes/{stylesheet}
}

export { apiPaths }
