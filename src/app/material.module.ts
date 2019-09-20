import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule,MatTabsModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatTabsModule,
        MatChipsModule
    ],
    exports: [
        MatButtonModule,
        MatTabsModule,
        MatChipsModule
    ],
    providers: [],
    bootstrap: []
})

export class MaterialModule { }