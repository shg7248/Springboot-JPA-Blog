package com.cos.blog.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// ORM -> Java(다른언어) Object -> 테이블로 생성
@Data
@AllArgsConstructor
@NoArgsConstructor
// @DynamicInsert // insert시 null인 값은 제외
@Builder
@Entity // User 클래스가 MySQL에 테이블이 생성이 된다.
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 프로젝트에서 연결된 DB의 넘버링 전략을 따라간다.
	private int id; // 시퀀스, auto_increment
	
	@Column(nullable = false, length = 100, unique = true)
	private String username; // 아이디
	
	@Column(nullable = false, length = 100) // 해쉬 (비밀번호 암호화)
	private String password;
	
	@Column(nullable = false, length = 50)
	private String email;
	
	// DB는 RoleType이라는 게 없다.
	@Enumerated(EnumType.STRING)
	//	@ColumnDefault("'user'")
	private RoleType role; // Enum을 쓰는게 좋다.
	
	private String oauth;
	
	@CreationTimestamp // 시간이 자동으로 입력
	private Timestamp createDate;
}
