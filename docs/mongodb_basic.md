## 프로젝트 구동 == MognoDB 구동
MongoDB 데이터베이스는 프로젝트 설치 시 이미 함께 설치 되어있으며, meteor 명령어를 통해 프로젝트를 구동하는 동시에 MongoDB 데이터베이스 역시 함께 구동됩니다.
프로젝트의 구동 시 포트를 설정하지 않으면 기본적으로 3000번의 포트를 프로젝트를 사용하게 되고, 내장 MongoDB는 여기에 1을 더한 3001번에서 함께 구동 됩니다. 

[기본 API] [MongoDB API 참조](https://docs.mongodb.com/manual/crud/)
* Anywhere: new Meteor.Collection(name, [options])  # options: connection, idGeneration, transform
* Anywhere: collection.findAll(selector, [options])  # options: sort, skip, limit, fields, reactive, transform
* Anywhere: collection.findOne(selector, [options])  # options: sort, skip, fields, reactive, transform
* Anywhere: collection.insert(doc, [callback])
* Anywhere: collection.update(selector, modifier, [options], [callback])  # options: multi, upsert
* Anywhere: collection.remove(selector, [callback])

## 데이터 콜렉션 생성
MongoDB에서는 MySQL과 같은 일반적인 RDBMS 데이터베이스에서 테이블이라 부르는 데이터 셋을 콜렉션(Collection)이라 부릅니다. 프로젝트 코드 내에서 이러한 콜렉션을 생성하기 위해서 프로젝트 최상위 디렉토리에 위치한 database.js 파일을 수정합니다.

    Posts = new Mongo.Collection('posts')

 상기 코드는 'posts'라는 이름의 콜렉션을 생성 한 후, 이를 Posts 라는 전역 변수에 할당하여 전체 프로젝트 어디에서나 접근 가능하도록 하고 있습니다. 

즉, 이제 Posts 변수를 통해 클라이언트 혹은 서버의 js 파일 중 어디에서나 DB의 Posts 콜레션에 접근하여 사용 할 수 있습니다.

위에서 테스트 Posts 콜렉션을 생성 했다면, 아래 코드들을 server/main.js의 startup() 함수 내부에서 테스트 가능합니다.
    Meteor.startup(function() {
      // code to run on server at startup
      // 아래 코드들을 이 부분에 입력하면서 테스트 해 볼 수 있습니다.
    });
### Insert
자신이 생성한 MongoDB 콜렉션 변수에 insert() 함수를 통해 원하는 형태의 JSON데이터를 직접 저장합니다.

    var post_id = Posts.insert({ 
      createdAt: new Date(),   //생성날짜 등 원하는 구조의 JSON 데이터
      title: ...                      
      ...
    });

위와 같이 데이터를 저장 시, 랜덤한 값의 UUID 데이터가 _id라는 값으로 JSON 데이터에 자동으로 포함되어 저장 되며, 이는 insert() 함수의 반환값으로 전달 되어 해당 데이터를 식별하는 유일한 Key로 향후 해당 데이터를 다룰 때 활용 가능 합니다.

### Find
데이터를 콜렉션에 저장하고나면 언제든 해당 데이터에 접근 할 수 있습니다.
현재 데이터베이스에 아래와 같은 형식의 데이터가 저장되어 있다고 가정하고 설명합니다.

    {   // 이러한 형식의 데이터가 복수가 저장 되어 있다고 가정.
      createdAt: new Date(),
      title: 'Hello World',
      message: 'Welcome to my world!'
      writer: 'John Doe'
    }

#### FindOne()
    Posts.findOne({writer: 'John Doe'}); 

상기 코드는 이름이 'John Doe'인 데이터를 전체 검색하기 때문에 writer 항목이 'John Doe'로 되어 있는 전체 문서에 해당하는 조건이지만,
findOne()은 1개의 데이터만 반환하기 때문에 가장 먼저 검색 된 JSON 데이터만 반환하게 됩니다.

만약 위에서 보았던 insert() 예제와 같이 post_id 값을 알 수 있다면, 다음과 같이 사용하여 정확하게 해당 데이터를 식별하여 가져올 수 있을 것입니다.
    Posts.findOne({_id: post_id});

#### FindAll()
    Posts.findAll({writer: 'John Doe'});
상기 코드는 이름이 'John Doe'인 전체 데이터를 대상으로 하고, 그 전체 데이터를 Array로 반환합니다.

#### 검색 조건 활용
find 명령의 파라미터의 첫번째 Object는 위와 같이 검색 항목에 대한 조건이며, 두번째 Object는 limit / skip / sort와 같은 옵션으로 구성 가능합니다.

    Posts.findAll({writer: 'John Doe'}, {sort: {createdAt: -1}, skip: 20, limit: 10});
상기 코드는 이름이 'John Doe'인 전체 데이터를 대상으로 검색 하되, 그 결과를 createdAt 항목에 역정렬(날짜에 역정렬)한 후, 앞에서부터 20개 항목을 제외(skip)하고, 이후 데이터 중 10개만 제한(limit)해서 가져오는 명령입니다.


### Update
특정 데이터의 값을 업데이트 할 때 사용합니다. 파라미터의 첫번째 Object로 조건을, 두번째 Object로 변환 할 데이터를 전달 합니다.

    var post_id = Posts.insert({...});
    post = Posts.findOne({_id: post_id});
    post.name = 'Jane Doe';
    Posts.update({_id: post_id}, post);
위 코드는 임의의 데이터를 Posts에 저장 후 반환 된 _id를 이용하여 해당 데이터 전체를 다시 불러온 후 특정 값을 변경하여 다시 같은 _id로 업데이트 합니다.


### Remove
특정 데이터를 지울 때 사용합니다. 파라미터의 첫번째 Object로 조건을, 두번째 Object로 일치하는 데이터가 복수 일 경우 어떻게 처리 할지를 결정합니다.

    Posts.remove({_id: post_id});                        // post_id에 해당하는 데이터를 1개만 지웁니다.
    Posts.remove({name: 'John Doe'}, {multi: true});     // name항목이 'John Doe'인 전체 데이터를 모두 지웁니다.



