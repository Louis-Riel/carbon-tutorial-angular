import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepoPageComponent } from './repo-page/repo-page.component';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { GridModule, TableModule } from 'carbon-components-angular';

@NgModule({
	declarations: [RepoPageComponent, RepoTableComponent],
	imports: [
		CommonModule,
		RepositoriesRoutingModule,
		TableModule,
		GridModule
	]
})
export class RepositoriesModule { }
