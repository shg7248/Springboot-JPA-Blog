package com.cos.blog.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class User {
	
	private int id;
	
	private String username;
	
	private String password;
	
	private String email;
	
	private Timestamp createDate;
}
