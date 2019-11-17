FlowRouter.template('/ex_login_custom', 'ex_login_custom');

Template.ex_login_custom.onRendered(function() {
  // 화면 로드 시 스크린 사이즈 전체를 활용하기 위한 설정
  $('html').css('height', '100%');
  $('body').css('height', '100%');
  $('#__blaze-root').css('height', '100%');
});

Template.ex_login_custom.onDestroyed(function() {
  // 화면 이동 시 스크린 사이즈 전체를 활용을 해제 하기 위한 설정
  $('html').css('height', '');
  $('body').css('height', '');
  $('#__blaze-root').css('height', '');
});

Template.ex_login_custom.helpers({
  email: function() {
    return Meteor.user().emails[0].address; //화면에 사용자의 이메일을 전달
  },
  isSignUpMode: function() {
    return Session.get('isSignUpMode'); //화면을 회원가입 모드로 변경/복구
  },
  userInfo: function() {
    return Meteor.user();
  }
});

Template.ex_login_custom.events({
  'click #btn-signIn': function() {
    var email = $('#inp-email').val();
    var password = $('#inp-password').val();
    Meteor.loginWithPassword(email, password, function(err) { //로그 오류 발생 시 처리 콜백 함수
      if (err) {
        alert(err);
      }
      else {
        alert('로그인 되었습니다.');
      }
    });
  },
  'click #btn-logout': function() {
    Meteor.logout();
    alert("로그아웃 되었습니다.");
  },
  'click #btn-signUpMode': function() {
    Session.set('isSignUpMode', true);  //회원 가입 모드 On
  },
  'click #btn-back': function() {
    Session.set('isSignUpMode', false); //회원 가입 모드 Off
  },
  'click #btn-signUp': function() {
    //사용자 입력 정보 저장
    var email = $('#inp-email').val();
    var password = $('#inp-password').val();
    var passwordConfirm = $('#inp-passwordConfirm').val();

    if(password == passwordConfirm) { // 비밀번호와 확인이 동일하게 입력 되었는지 확인
      Accounts.createUser({ //사용자 생성 함수
        email: email,
        password: password
      }, function(err) { //사용자 생성 오류 시 처리 콜백 함수
        if (err) {
          alert(err);
        }
      });
    }
    else {
      alert('비밀번호가 일치하지 않습니다. 다시 확인 해 주세요.');
    }
  },
  'click #btn-update-profile': function() {
    var userInfo = Meteor.user();
    var name = $('#inp-name').val();
    var address = $('#inp-address').val();
    var mobile = $('#inp-mobile').val();

    Meteor.users.update({_id: userInfo._id}, {
      $set: {
        'profile.name': name,
        'profile.address': address,
        'profile.mobile': mobile
      }
    });

    alert('사용자 프로파일을 수정 하였습니다.');
  }
});
