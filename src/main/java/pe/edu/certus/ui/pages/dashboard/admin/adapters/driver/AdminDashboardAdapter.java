package pe.edu.certus.ui.pages.dashboard.admin.adapters.driver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.dashboard.admin.ports.driver.ForAdminDashboard;

@Controller
@RequestMapping(AdminDashboardRoute.ADMIN_DASHBOARD_ROUTE)
public class AdminDashboardAdapter implements ForAdminDashboard {

    @GetMapping(AdminDashboardRoute.ADMIN_WORKS_ROUTE)
    @Override
    public String showWorks( ) {
        return AdminDashboardRoute.ADMIN_WORKS_FILE;
    }

    @GetMapping(AdminDashboardRoute.ADMIN_WORKS_FOR_REVIEW_ROUTE)
    @Override
    public String showWorksForReview( ) {
        return AdminDashboardRoute.ADMIN_WORKS_FOR_REVIEW_FILE;
    }

    @GetMapping(AdminDashboardRoute.ADMIN_USERS_ROUTE)
    @Override
    public String showUsers( ) {
        return AdminDashboardRoute.ADMIN_USERS_FILE;
    }

    @GetMapping(AdminDashboardRoute.ADMIN_USER_DETAILS_ROUTE)
    @Override
    public String showUserDetails( ) {
        return AdminDashboardRoute.ADMIN_USER_DETAILS_FILE;
    }

    @GetMapping(AdminDashboardRoute.ADMIN_REQUEST_SELLER_ROLES_ROUTE)
    @Override
    public String showRequestSellerRoles( ) {
        return AdminDashboardRoute.ADMIN_REQUEST_SELLER_ROLES_FILE;
    }

    @GetMapping(AdminDashboardRoute.ADMIN_ORDER_ROUTE)
    @Override
    public String showOrders( ) {
        return AdminDashboardRoute.ADMIN_ORDER_FILE;
    }

    @GetMapping(AdminDashboardRoute.ADMIN_ORDER_DETAILS_ROUTE)
    @Override
    public String showOrderDetails( ) {
        return AdminDashboardRoute.ADMIN_ORDER_DETAILS_FILE;
    }
}
