package pe.edu.certus.ui.pages.profile.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.profile.ports.drivers.ForProfile;

@Controller
@RequestMapping
public class ProfileAdapter implements ForProfile {

    @GetMapping( ProfileRoute.PROFILE_PAGE_ROUTE)
    @Override
    public String showProfile( ) {
        return ProfileRoute.PROFILE_PAGE_FILE;
    }
}
