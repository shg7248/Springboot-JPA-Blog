<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../layout/header.jsp" %>

<div class="container">
  <h2>회원정보</h2>
  <form>
  	<input type="hidden" id="id" value="${principal.user.id }">
    <div class="form-group">
      <label for="username">username:</label>
      <input type="text" value="${principal.user.username }" class="form-control" id="username" placeholder="Enter username" name="username">
    </div>
    <c:if test="${empty principal.user.oauth }">
   	    <div class="form-group">
	      <label for="password">Password:</label>
	      <input type="password" value="${principal.user.password }" class="form-control" id="password" placeholder="Enter password" name="password">
	    </div>
    </c:if>
    
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" value="${principal.user.email }" class="form-control" id="email" placeholder="Enter email" name="email" readonly="readonly">
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
  </form>
  <button id="btn-update" class="btn btn-primary">수정완료</button>
</div>

<script src="/js/user.js" ></script>
<%@ include file="../layout/footer.jsp" %>