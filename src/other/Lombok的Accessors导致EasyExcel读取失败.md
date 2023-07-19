---
title: Lombok的Accessors导致EasyExcel读取失败
date: 2023-07-19
category:
- Lombok
tag:
- Lombok
- easyexcel
---

## 相关代码

```java
@Data
public class XXXXStoreDTO {

    @ExcelIgnore
    private String aaaa;

    @ExcelProperty(value = "*门店编码",index = 0)
    private String storeNo;

    @ExcelProperty("门店名称")
    private String storeName;

    @ExcelIgnore
    private String bbbb;
}

@Override
public List<XXXXStoreDTO > getStore(String filePath) throws IOException {
    URL url = new URL(filePath);
    InputStream inputStream = new BufferedInputStream(url.openStream());
    List<CampaignStoreDTO> allList = new ArrayList<>();
    EasyExcel.read(inputStream, XXXXStoreDTO .class, new PageReadListener<XXXXStoreDTO >(dataList -> {
        allList.addAll(dataList);
    })).sheet().headRowNumber(1).doRead();
    return allList;
}

当XXXXStoreDTO类上没有添加@Accessors(chain = true)注解后不能正常读取数据，
没有细究原因，记录下坑
```

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：美貌会消逝，但蠢是永恒的~
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=0c0d5d1b-32b2-4396-ad2e-e8446c621579)
