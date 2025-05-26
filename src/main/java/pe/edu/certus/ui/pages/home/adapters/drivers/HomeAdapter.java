package pe.edu.certus.ui.pages.home.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.home.ports.drivers.ForHome;

@Controller
@RequestMapping( )
public class HomeAdapter implements ForHome {

    @GetMapping( HomeRoute.HOME_PAGE_ROUTE)
    @Override
    public String showHomePage() {
        return HomeRoute.HOME_PAGE_FILE;
    }
}
