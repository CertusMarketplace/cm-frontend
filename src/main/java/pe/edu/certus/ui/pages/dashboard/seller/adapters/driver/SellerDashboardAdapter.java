package pe.edu.certus.ui.pages.dashboard.seller.adapters.driver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.dashboard.seller.ports.driver.ForSellerDashboard;

@Controller
@RequestMapping(SellerDashboardRoute.SELLER_DASHBOARD_ROUTE)
public class SellerDashboardAdapter implements ForSellerDashboard {

    @GetMapping
    @Override
    public String showSellerDashboard( ) {
        return SellerDashboardRoute.SELLER_DASHBOARD_FILE;
    }

    @GetMapping("/fragments/seller-works")
    public String loadWorkString() {
        return SellerDashboardRoute.SELLER_WORKS_FRAGMENT + " :: content";
    }
    
    @GetMapping("/fragments/seller-works-under-review")
    public String loadSellerWorksUnderReview() {
        return SellerDashboardRoute.SELLER_WORKS_UNDER_REVIEW_FRAGMENT + " :: content";
    }

    @GetMapping("/fragments/seller-sales")
    public String loadSales() {
        return SellerDashboardRoute.SELLER_SALES_FRAGMENT + " :: content";
    }

}

