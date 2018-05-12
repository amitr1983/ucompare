package edu.sjsu.icompare.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ICompareAdminIndexController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}

}
