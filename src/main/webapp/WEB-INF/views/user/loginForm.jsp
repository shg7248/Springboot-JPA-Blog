<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../layout/header.jsp" %>

<div class="container">
  <h2>로그인</h2>
  <form action="/auth/loginProc" method="post">
  
    <div class="form-group">
      <label for="username">username:</label>
      <input type="text" id="username" class="form-control" id="username" placeholder="Enter username" name="username">
    </div>
    
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" class="form-control" id="password" placeholder="Enter password" name="password">
    </div>
    
    <button type="submit" class="btn btn-primary">로그인</button>
    <a href="https://kauth.kakao.com/oauth/authorize?client_id=d8c4be9b8ffae6b0ce2dc7b76e7f5eb9&redirect_uri=http://localhost:8000/auth/kakao/callback&response_type=code"><img height="38px" src="/image/kakao_login_button.png" /></a>
  </form>
  
</div>

<%@ include file="../layout/footer.jsp" %>