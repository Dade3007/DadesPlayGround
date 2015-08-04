package com.fisio.main;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Vicalmotor extends HttpServlet{

	/**
	 * David Martin
	 */
	private static final long serialVersionUID = 4702676318170140399L;

	public void doPost (HttpServletRequest req, HttpServletResponse resp){
		try {
			RequestDispatcher view = req.getRequestDispatcher("/vicalmotor/index.html");		
			view.forward(req, resp);
		} catch (ServletException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void doGet (HttpServletRequest req, HttpServletResponse resp){
		doPost(req,resp);
	}
}
