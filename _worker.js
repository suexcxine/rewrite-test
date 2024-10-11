export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 构造新的URL，将路径和查询参数转发到app.voxsig.com
    const newUrl = new URL(url.pathname + url.search, 'https://app.qiabot.com');
    
    // 创建新的请求，保留原始请求的方法、头部等信息
    const newRequest = new Request(newUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    
    // 发送新请求并返回响应
    return fetch(newRequest);
  }
};
