<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../layout/header.jsp" %>

<div class="container">
  <h2>로그인</h2>
  <form action="/action_page.php" method="post">
  
    <div class="form-group">
      <label for="username">username:</label>
      <input type="text" id="username" class="form-control" id="username" placeholder="Enter username" name="username">
    </div>
    
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" class="form-control" id="password" placeholder="Enter password" name="password">
    </div>
    
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" name="remember" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    
    <button type="submit" class="btn btn-primary">로그인</button>
  </form>
</div>

<%@ include file="../layout/footer.jsp" %>