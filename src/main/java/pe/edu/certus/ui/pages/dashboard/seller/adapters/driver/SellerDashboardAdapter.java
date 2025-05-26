package pe.edu.certus.ui.pages.dashboard.seller.adapters.driver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.dashboard.seller.ports.driver.ForSellerDashboard;

@Controller
@RequestMapping(SellerDashboardRoute.SELLER_DASHBOARD_ROUTE)
public class SellerDashboardAdapter implements ForSellerDashboard {

    @GetMapping(SellerDashboardRoute.SELLER_WORK_DASHBOARD_ROUTE)
    @Override
    public String showSellersWorkDashboard( ) {
        return SellerDashboardRoute.SELLER_WORK_DASHBOARD_FILE;
    }

    @GetMapping(SellerDashboardRoute.SELLER_WORKS_UNDER_REVIEW_ROUTE)
    @Override
    public String showWorksUnderReviewDashboard( ) {
        return SellerDashboardRoute.SELLER_WORKS_UNDER_REVIEW_FILE;
    }
}
