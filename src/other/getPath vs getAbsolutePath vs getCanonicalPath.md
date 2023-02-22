# getPath vs getAbsolutePath vs getCanonicalPath

1. getPath
    
    以构造路径作为返回值
    
2. getAbsolutePath
    
    以绝对路径作为返回值
    
3. getCanonicalPath
    
    以绝对路径作为返回值（如果路径包含.或..会进行处理）
    

```java
public static void main(String[] args){
	  File file1 = new File(".\\xxx.txt");
    File file2 = new File("D:\\aaa\\xxx.txt");

    System.out.println(file1.getPath());
    System.out.println(file1.getAbsolutePath());
	  System.out.println(file1.getCanonicalPath());
    System.out.println("------------------------");
    System.out.println(file2.getPath());
    System.out.println(file2.getAbsolutePath());
	  System.out.println(file2.getCanonicalPath());
}
 
 
输出如下内容：

.\xxx.txt
D:\aaa\.\xxx.txt
D:\aaa\xxx.txt
------------------------
D:\aaa\xxx.txt
D:\aaa\xxx.txt
D:\aaa\xxx.txt
```

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：生活有两大误区，一是活给别人看，二是看别人活。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=dongman&type=302&uuid=434d0d38-b806-4f33-a9ac-34bfc072b94f)
