import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageFormComponent } from './shared/greeting/message-form/message-form.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';
import { GreetingComponent } from './shared/greeting/greeting.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
      path: 'message',
      component: MessageFormComponent
  },
  {
      path: 'skills',
      component: SkillsComponent
  },
  {
      path: 'greeting',
      component: GreetingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
      path: '',
      redirectTo: '/greeting',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}