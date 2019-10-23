Meteor.startup ->
  unless Meteor.users.findOne(username: 'admin')
    Accounts.createUser
      username: 'admin'
      password: 'admin!24'
      profile:
        isAdmin: true

  unless DB_LEE.findOne()
    DB_LEE.insert
      createdAt: new Date()
      period: '1998.3~2005.2'
      title: '상명대학교 소프트웨어대학 소프트웨어학과 (학사)'
    DB_LEE.insert
      createdAt: new Date()
      period: '2005.3~2007.2'
      title: '상명대학교 대학원 컴퓨터과학과 (석사)<br>
              <small><em>(Thesis: A Study on Gaze Tracking Method based on Three Dimensional Analysis of Human Eye)</em></small>'
    DB_LEE.insert
      createdAt: new Date()
      period: '2007.3~2010.2'
      title: '<p>상명대학교 대학원 컴퓨터과학과 (박사)<br>
                <small><em>(Thesis: A Study on Image Restoration for Finger Vein Recognition)</em></small></p>'
    DB_LEE.insert
      createdAt: new Date()
      period: '2010.3~2012.2'
      title: '국가수리과학연구소 융복합수리과학연구부 연구원 (생체/감성인식연구실 책임자)'
    DB_LEE.insert
      createdAt: new Date()
      period: '2013.3~2015.9'
      title: '상명대학교 공학교육혁신센터 심화컴퓨터과학프로그램 PD'
    DB_LEE.insert
      createdAt: new Date()
      period: '2014.6~2017.11'
      title: '상명대학교 서울캠퍼스 창업교육센터장'
    DB_LEE.insert
      createdAt: new Date()
      period: '2016.10~2019.1'
      title: '상명대학교 서울캠퍼스 융합공과대학 지능정보공학부 학부장'
    DB_LEE.insert
      createdAt: new Date()
      period: '2016.8~2019.1'
      title: '상명대학교 서울캠퍼스 융합공과대학 휴먼지능정보공학과 학과장'
    DB_LEE.insert
      createdAt: new Date()
      period: '2018.3~2019.1'
      title: '상명대학교 교육미디어혁신센터 센터장'
    DB_LEE.insert
      createdAt: new Date()
      period: '2012.3~ing'
      title: '상명대학교 휴먼지능정보공학과 교수'
    DB_LEE.insert
      createdAt: new Date()
      period: '2018.3~ing'
      title: '상명대학교 일반대학원 스포츠ICT융합학과 학과장'
    DB_LEE.insert
      createdAt: new Date()
      period: '2019.2~ing'
      title: '상명대학교 정보통신처장'
