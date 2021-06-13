import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TriviaQuestionComponent } from './trivia-question/trivia-question.component';

const routes: Route[] = [
  { path: 'trivia', component: TriviaComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: TriviaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    AboutComponent,
    TriviaQuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
