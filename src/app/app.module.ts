import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';
import { SkillsService } from './modules/skills/services/skills.service';

import { ContactComponent } from './contact/contact.component';
import { GreetingComponent } from './shared/greeting/greeting.component';
import { FormsModule } from '@angular/forms';
import { MessageFormComponent } from './shared/greeting/message-form/message-form.component';
import { ContactService } from './modules/skills/services/contact.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactComponent,
    GreetingComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [SkillsService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
