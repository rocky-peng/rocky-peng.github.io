# 是时候使用MapStruct替代BeanUtils了

## 实例代码（后文有源码）

![Untitled](https://cdn.justdopay.com/notion/md5-6585edce77eb3cab2d8293d60a1109ba.png)

1. 左边一列是两个要转换的对象。
    1. 字段名相同、类型相同的
    2. 字段名相同、类型不同的
    3. 字段名不同、类型不同的
2. 中间一列是转换代码
3. 右边一列是引用到的代码

看上面代码应该也能明白大概怎么使用了

![Untitled](https://cdn.justdopay.com/notion/md5-84e3a22cb6487f76115a15e1311aa3b9.gif)

## 源码

```java
package org.example;
import lombok.Data;
import java.io.Serializable;
import java.util.Date;

@Data
public class UserDto implements Serializable {
    private Integer id;
    private String name;
    private String address;
    private Date birth1;
    private Gender gender;
    private Boolean test;
}

================================================================================

package org.example;
import lombok.Data;
@Data
public class User {
    private Integer id;
    private String name;
    private String address;
    private String birth;
    private String gender;

    private String test1;
}

================================================================================

package org.example;
public enum Gender {
    MALE,
    FEMALE
}

================================================================================

package org.example;
public class BooleanStrFormat {
    public String toStr(Boolean isDisable) {
        System.out.println("BooleanStrFormat.toStr");
        if (isDisable) {
            return "Y";
        } else {
            return "N";
        }
    }
    public Boolean toBoolean(String str) {
        System.out.println("BooleanStrFormat.toBoolean");
        if (str.equals("Y")) {
            return true;
        } else {
            return false;
        }
    }
}

================================================================================

package org.example;
import lombok.SneakyThrows;
import org.mapstruct.MapMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Mapper(uses = {BooleanStrFormat.class})
public interface UserMapper {

    @Mapping(target = "birth1", source = "birth")
    @Mapping(target = "test", source = "test1")
    UserDto userToUserDto(User user);

    List<UserDto> userToUserDto(List<User> users);

    /*default String date2Str(Date date) {
        System.out.println("执行了date2Str");
        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
    }*/

    @SneakyThrows
    default Date str2Date(String date) {
        System.out.println("执行了str2Date");
        return new SimpleDateFormat(
                "yyyy-MM-dd HH:mm:ss"
        ).parse(date);
    }

    default Gender str2Gender(String str) {
        System.out.println("执行了str2Gender");
        return Gender.valueOf(str);
    }

    @MapMapping(valueDateFormat = "yyyy-MM-dd HH:mm:ss")
    Map<String, String> DateMapToStringMap(
            Map<String, Date> sourceMap);
}

================================================================================

package org.example;
import org.junit.Test;
import org.mapstruct.factory.Mappers;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Tests {
    @Test
    public void userPoToUserDto() {
        User user = new User();
        user.setId(1);
        user.setName("myx");
        user.setAddress("河北沧州");
        user.setBirth("2023-06-06 12:12:12");
        user.setGender("MALE");
        user.setTest1("Y");
        UserMapper mapper = Mappers.getMapper(UserMapper.class);
        UserDto userDto = mapper.userToUserDto(user);
        System.out.println(userDto);
    }

    @Test
    public void mapMappingTest() {
        Map<String, Date> map = new HashMap<>();
        map.put("key1", new Date());
        map.put("key2", new Date(new Date().getTime() + 9800000));
        UserMapper mapper = Mappers.getMapper(UserMapper.class);
        Map<String, String> stringObjectMap =
                mapper.DateMapToStringMap(map);
        System.out.println(stringObjectMap);
    }
}
```

<br/><br/><br/><br/><br/><br/>


---
---
- **随机毒鸡汤**：有个姑娘问我借钱去整容，整的挺成功，我再没认出是谁问我借的钱。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=dongman&uuid=2399901c-8fcf-427d-bb2d-a0dd911431f4)
