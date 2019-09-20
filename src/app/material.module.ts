import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule, MatTabsModule, MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatTabsModule,
        MatChipsModule,
        MatProgressBarModule
    ],
    exports: [
        MatButtonModule,
        MatTabsModule,
        MatChipsModule,
        MatProgressBarModule
    ],
    providers: [],
    bootstrap: []
})

export class MaterialModule { }