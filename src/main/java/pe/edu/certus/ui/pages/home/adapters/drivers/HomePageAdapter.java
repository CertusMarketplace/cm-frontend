package pe.edu.certus.ui.pages.home.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.constants.BusinessRoute;
import pe.edu.certus.ui.pages.home.ports.drivers.ForHomePage;

@Controller
@RequestMapping( BusinessRoute.BUSINESS_PAGE_ROUTE )
public class HomePageAdapter implements ForHomePage {

    @GetMapping(HomePageRoute.HOME_PAGE_ROUTE)
    @Override
    public String displayHomePage() {
        return HomePageRoute.HOME_PAGE_FILE;
    }
}
