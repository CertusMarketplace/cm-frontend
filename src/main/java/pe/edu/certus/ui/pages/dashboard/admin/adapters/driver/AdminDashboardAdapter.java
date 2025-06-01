package pe.edu.certus.ui.pages.dashboard.admin.adapters.driver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.dashboard.admin.ports.driver.ForAdminDashboard;

@Controller
@RequestMapping(AdminDashboardRoute.ADMIN_DASHBOARD_ROUTE)
public class AdminDashboardAdapter implements ForAdminDashboard {

    @GetMapping
    @Override
    public String showAdminDashboard( ) {
        return AdminDashboardRoute.ADMIN_DASHBOARD_FILE;
    }
}
