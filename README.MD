#next-lang-string

##description:
+ String helper based on next toolkit.

##usage:
+ get string util:
```javascript:
  var StringUtil=nx.lang.String;
```
+ trim:
```javascript:
  var abc='   abc ';
  console.log(
    StringUtil.trim(abc)
  );
  //result:
  //abc
```
+ camelCase:
```javascript:
  var str2='font-size';
  console.log(
    StringUtil.camelCase(abc)
  );
  //result:
  //fontSize
```
+ hyphenate:
```javascript:
  var str3='fontWeight';
  console.log(
    StringUtil.hyphenate(abc)
  );
  //result:
  //font-weight
```
+ capitalize:
```javascript:
  var str3='abc';
  console.log(
    StringUtil.capitalize(abc)
  );
  //result:
  //Abc
```

+ repeat:
```javascript:
  var str3='abc';
  console.log(
    StringUtil.repeat('a',3)
  );
  //result:
  //aaa
```



##test
+ install mocha -g
+ mocha






