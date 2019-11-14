## 템플릿에 데이터 전달하기, helpers
js의 helpers에서 전달 된 값은 template에게 전달 됩니다.
    // js코드
    Template.템플릿명.helpers({
      data: function() { return 'any data..' }
    });
위와 같이 js측에서 helpers가 정의 된 템플릿에서는 다음과 같이 해당 데이터를 표현 할 수 있습니다.

_.html_
```html
<template name="템플릿명">
  {{data}}
</template>
```


html 템플릿의 {{data}}의 위치에는 helpers의 해당 함수에서 return 된 값이 정확히 대체되어 표시 되게 됩니다. 이를 활용하면 js에서 데이터베이스를 통해 꺼낸 데이터를 화면에 바로 전달하여 표현 할 수 있습니다.

## JSON 오브젝트 표현
js의 helpers에서 데이터베이스를 통해 JSON 데이터를 화면에 전달 할 경우, 다음과 같이 각 데이터에 접근 가능합니다.

_.js_
```js
Template.템플릿명.helpers({
  Post: function() { return Posts.findOne(); }
});
```

_.html_
```html
<template name="템플릿명">
  <div>{{Post.name}}</div>
  <div>{{Post.title}}</div>
  ...
</template>
```
Post 객체가 화면에 전달 되면 몇번이든 해당 JSON 객체의 하위 요소에 접근 가능하다는 것을 뜻 합니다.

## 반복문, Array 데이터의 표현
데이터베이스에서 데이터를 검색 하면 보통 Array 형태의 복수 데이터가 검색 됩니다. 

_.js_
```js    
Template.템플릿명.helpers({
  Posts: function() { return Posts.findAll(); }
});  
``` 

위 코드는 js측에서 데이터베이스에 접근하여 Posts 데이터베이스의 모든 데이터를 화면에 전달 하도록 합니다.

_.html_
```html
<template name="템플릿명">
  {{#each Posts}}
    <div>{{name}}</div>
    <div>{{title}}</div>
    ...
  {{/each}}
</template>
```

이를 화면에 반복해서 그리기 위해서는 위와 같이 {{#each }} 구문을 사용하여 {{/each}} 사이의 html 구문을 반복해서 그리면서, Array의 각 Object에 포함 된 데이터들에 접근 할 수 있습니다.

## 분기문, if ~ else ~
또한 js에서 획득한 정보에 따라 화면을 다르게 보이게 하거나, 기능을 구분해서 표현 할 수도 있습니다.

_.js_
```js    
Template.템플릿명.helpers({
  isAdmin: function() { 
    return true; //(데이터베이스에서 현재 사용자를 확인하여 true 혹은 false를 return) 
  }
});
```

_.html_
```html
<template name="템플릿명">
  {{#if isAdmin}}
    <div> 본 사용자는 관리자 입니다.</div>
  {{else}}
    <div> 본 사용자는 관리자가 아닙니다.</div>
  {{/if}}
</template>
```
위 코드는 js에서 항상 true를 반환하기에 항상 '본 사용자는 관리자 입니다.'라고 표시 하겠지만, js의 helpers에서 데이터베이스의 사용자 데이터를 가져와서 사용한다면 해당 값을 통해 사용자를 구분해서 화면 다른 내용을 표시 할 수 있을 것입니다.
