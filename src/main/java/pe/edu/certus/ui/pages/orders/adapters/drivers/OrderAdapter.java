package pe.edu.certus.ui.pages.orders.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.orders.ports.drivers.ForOrder;

@Controller
@RequestMapping
public class OrderAdapter implements ForOrder {

    @GetMapping( OrderRoute.ORDERS_PAGE_ROUTE)
    @Override
    public String showOrders( ) {
        return OrderRoute.ORDERS_PAGE_FILE;
    }


    @GetMapping( OrderRoute.ORDER_DETAILS_PAGE_ROUTE)
    @Override
    public String showOrderDetails( ) {
        return OrderRoute.ORDER_DETAILS_PAGE_FILE;
    }
}
