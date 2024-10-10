addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 获取原始请求的URL
  const url = new URL(request.url)
  
  // 构造新的URL,将域名替换为app.voxsig.com
  const newUrl = new URL(url.pathname + url.search, 'https://app.voxsig.com')
  
  // 创建新的请求,保留原始请求的方法、头部等信息
  const newRequest = new Request(newUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })
  
  // 发送新请求并返回响应
  return fetch(newRequest)
}
