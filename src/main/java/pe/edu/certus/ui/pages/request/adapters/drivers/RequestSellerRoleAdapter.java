package pe.edu.certus.ui.pages.request.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.request.ports.drivers.ForRequestSeller;

@Controller
@RequestMapping
public class RequestSellerRoleAdapter implements ForRequestSeller {

    @GetMapping( RequestSellerRoleRoute.WORK_PAGE_ROUTE)
    @Override
    public String showRequestRolePage( ) {
        return RequestSellerRoleRoute.REQUEST_SELLER_ROLE_PAGE_FILE;
    }

}
