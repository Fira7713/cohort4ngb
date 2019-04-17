import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppshellComponent} from './appshell/appshell.component';
import {ExamplePage} from './dashboard/example/example.page';

const routes : Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'shell'
  },
  {
    path:'shell',
    component : AppshellComponent,
    children: [
      {
        path:'', pathMatch:'full', redirectTo:'dashboard'
      },
      {
        path:'dashboard',component:ExamplePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule{ }
