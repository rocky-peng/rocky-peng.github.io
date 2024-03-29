---
title: 前端axios下载csv文件乱码
date: 2023-08-31
tag:
- csv乱码
- axios 乱码
---

## 问题

现在有个后端下载csv文件的接口，在浏览器地址栏直接请求这个接口，下载的文件用office的excel打开不乱码（wps也能正常显示），但通过页面点击按钮来下载，保存的文件用office的excel打开就乱码（wps还是能正常显示）。

后端代码大概这样：

```java
/**
 *
 * @param response
 * @param checkResultFileUrl 这个文件要求是gkb编码
 * @throws IOException
 */
@Override
public void downloadCheckResult(HttpServletResponse response, String checkResultFileUrl) throws IOException {
    response.setCharacterEncoding("GBK");
    response.addHeader("Content-Disposition", "attachment; filename=checkResult.csv");
    response.addHeader("Content-Type", "text/csv");

    ServletOutputStream outputStream = response.getOutputStream();

    InputStream is = fileStorageService.getFileInputStream(checkResultFileUrl);
    byte[] bytes = IOUtils.readFully(is, is.available());
    outputStream.write(bytes);
    outputStream.flush();
    outputStream.close();
}
```

前端代码大概这样：

![Untitled](https://cdn.justdopay.com/notion/md5-516bea5d2551055e6fbf71d2f7fa6a42.png)

## 解决方法

发起请求的时候不设置 responseType: 'blob',并且在downLoadFile函数中类似下面的修改

```java
let resData ='\ufeff' + row.data;
const blob = new Blob([resData], {
    type: 'text/csv,charset=UTF-8'
});
```

成功！！！ 关键点是在返回的data 上加上'\ufeff’

![Untitled](https://cdn.justdopay.com/notion/md5-e65d409adbe72c698846b8b4a1876c68.gif)

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：路漫漫其修远兮，吾将上下而求人。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=b3b6db9c-5057-4e12-891c-e2fbf30cab84)
