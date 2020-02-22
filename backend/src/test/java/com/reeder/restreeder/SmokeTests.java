package com.reeder.restreeder;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;

import com.reeder.restreeder.controller.v1.api.UserController;

@SpringBootTest
public class SmokeTests {

	@Autowired
	private UserController controller;

	@Test
	void contextLoads() throws Exception {
		assertThat(controller).isNotNull();
	}

}
