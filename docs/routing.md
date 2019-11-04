## 새로운 페이지 생성 / 경로 연결
브라우저 주소창에 http://localhost:3000 을 입력 하면 브라우저는 해당 주소와 포트에 접속해서 html/css/js 파일을 전달 받아 화면에 표시합니다. 이는 마치 http://www.google.com 을 입력 한 것과 동일하게 동작하는 것으로 정상적인 웹서버가 이미 구동되고 있음을 의미합니다. 

따라서 우리가 구동한 서버의 주소 뒤에는, http://localhost:3000/login 과 같이 '/'로 구분하여 우리가 원하는 경로를 설정 후 얼마든지 새로운 페이지에 연결 할 수 있습니다.

### Router
프로젝트는 기본적으로 main.html에 main이라는 이름의 템플릿을 가지고 있고, main.js에는 다음과 같이 '/' 주소로 접근 시 main 템플릿을 브라우저에 전달 하도록 명시 되어 있습니다.

_main.js_
```js
FlowRouter.template('/', 'main');
```
만약 posts.html과 같이 새로운 템플릿을 생성 한 후 다음과 같이 설정 한다면 이제 'http://localhost:3000/posts'을 주소창에 입력하여 접근 시 브라우저 화면에 posts 템플릿을 그려주게 될 것입니다.

_posts.html_
```html
<template name="posts">
  <!-- Posts 화면 구성  -->
</template>
```

_posts.js_
```js
FlowRouter.template('/posts', 'posts');
``` 

### 주소창으로 파라미터 전달 받기
게시판 목록에서 특정 글의 제목을 클릭하면 전통적으로 해당 게시글의 상세 화면으로 넘어가서 자세한 내용들을 표시 합니다. 이럴때에는 사용자가 게시판 목록에서 어떠한 글을 선택했는지 다음 상세 화면에 알려주어야 할 필요가 있습니다.

_posts.html_
```html
<template name="posts">
  <!-- Posts 게시판 목록 화면 구성  -->
  {{#each posts}}
    <a href="/post/{{_id}}">{{title}}</a>
  {{/each}}
</template>
```
게시판 목록 화면을 위와 같이 구성한 posts.html 템플릿이 있다고 가정 했을 때, <a href="/post/{{_id}}"> 태그가 의미하는 바는 다음과 같습니다.
- 해당 라인이 클릭 되었을때 /post 경로의 템플릿으로 이동하되,
- 이때 /post의 뒷 부분에 해당 글에 포함 된 _id 값을 붙여서 /post/{{_id}}와 같은 주소로 접근해라

따라서 해당 링크를 사용자가 클릭한다면 전체 접근 주소는 /post/ 까지는 동일하되 뒤에는 해당 글에 포함 된 _id에 해당하는 UUID 랜덤 값이 포함 되게 될 것입니다.    

_post.js_
```js
FlowRouter.template('/post/:_id', 'posts');

Template.post.helpers({
  post: function() {
    var param_id = FlowRouter.getParam('_id');
    return Posts.findOne({_id: param_id});
  }
});
```

이렇게 posts 템플릿의 링크가 사용자에 의해 선택 되면 http://localhost:3000/post/gdkJir6KwfxxP2EGt 와 같이 _id를 포함한 경로로 브라우저가 이동하게 되기 때문에 post 템플릿의 .js 파일에서는 이러한 _id값을 핸들링 할 수 있도록 위와 같이 Router 설정 및 이를 이요한 데이터를 특정지어 post 템플릿에 전달해야 합니다.

_post.html_
```html
<template name="post">
  <div>{{post.title}}</div>
  <div>{{post.writer}}</div>
  ...
</template>
```
post.html 템플릿에서는 이렇게 전달 받은 post 데이터를 원하는 대로 사용 할 수 있습니다.


이제 싱글 페이지 어플리케이션 뿐만 아니라 여러 페이지를 구성하여 보다 복잡한 웹 어플리케이션을 작성 할 준비가 되었습니다.