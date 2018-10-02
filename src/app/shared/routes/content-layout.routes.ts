import { Routes, RouterModule } from '@angular/router';
import { SelectCompanyComponent } from '../../pages/select-company/select-company.component';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'content-layout',
        loadChildren: './pages/content-layout-page/content-pages.module#ContentPagesModule'
    }
  
];