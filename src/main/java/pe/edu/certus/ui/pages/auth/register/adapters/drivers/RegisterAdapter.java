package pe.edu.certus.ui.pages.auth.register.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.auth.register.ports.drivers.ForRegister;

@Controller
@RequestMapping("/auth")
public class RegisterAdapter implements ForRegister {

    @GetMapping(RegisterRoute.REGISTER_PAGE_ROUTE)
    @Override
    public String showRegisterPage( ) {
        return RegisterRoute.REGISTER_PAGE_FILE;
    }
}
