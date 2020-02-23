package com.reeder.restreeder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class RestReederApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	// @Test
	// public void shouldReturnDefaultMessage() throws Exception {
	// 	this.mockMvc.perform(get("/greeting"))
	// 		.andDo(print())
	// 		.andExpect(status().isOk())
	// 		.andExpect(content().string(containsString("Hello World")));
	// }
	//
	// @Test
	// public void shouldReturnMessageWithName() throws Exception {
	// 	String name = "Albert";
	// 	this.mockMvc.perform(get("/greeting").param("name", name))
	// 		.andDo(print())
	// 		.andExpect(status().isOk())
	// 		.andExpect(content().string(containsString("Hello " + name)));
	// }

}
