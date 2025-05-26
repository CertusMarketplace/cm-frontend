package pe.edu.certus.ui.pages.auth.login.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.auth.login.ports.drivers.ForLogin;

@Controller
@RequestMapping("/auth")
public class LoginAdapter implements ForLogin {

    @GetMapping( LoginRoute.LOGIN_PAGE_ROUTE)
    @Override
    public String showLoginPage( ) {
        return LoginRoute.LOGIN_PAGE_FILE;
    }
}
