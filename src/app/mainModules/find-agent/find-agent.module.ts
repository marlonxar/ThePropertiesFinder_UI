import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAgentComponent } from './find-agent.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AgentsComponent } from './agents/agents.component';
import { ChunkPipe } from './agents/custom-pipes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    FindAgentComponent,
    AgentsComponent,
    ChunkPipe
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class FindAgentModule { }
