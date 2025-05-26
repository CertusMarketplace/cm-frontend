package pe.edu.certus.ui.pages.works.adapters.drivers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pe.edu.certus.ui.pages.works.ports.drivers.ForWork;

@Controller
@RequestMapping
public class WorkAdapter implements ForWork {

    @GetMapping( WorkRoute.WORK_PAGE_ROUTE)
    @Override
    public String showWorksPage( ) {
        return WorkRoute.WORK_PAGE_FILE;
    }

    @GetMapping( WorkRoute.WORK_DETAIL_PAGE_ROUTE)
    @Override
    public String showWorkDetailPage( ) {
        return WorkRoute.WORK_DETAIL_PAGE_FILE;
    }



}
