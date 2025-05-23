package pe.edu.certus.ui.pages.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {
    
    @GetMapping("/login")
    public String showLoginPage() {
        return "/auth/login/templates/login";
    }

    @GetMapping("/register")
    public String showRegisterPage() {
        return "/auth/register/templates/register";
    }
}
