import { NgModule } from '@angular/core';

import { KeysPipe } from './keys.pipe';
import { GetByIdPipe } from './getById.pipe';
import { HtmlToPlaintextPipe } from './htmlToPlaintext.pipe';
import { FilterPipe } from './filter.pipe';
import { CamelCaseToDashPipe } from './camelCaseToDash.pipe';
import { ShotNamePipe } from './shot-name.pipe';
import { TitleURLPipe } from './titleUrl.pipe';
import { OrderByPipe } from './orderBy.pipe';
import { ReversePipe } from './reverse.pipe';
@NgModule({
    declarations: [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        FilterPipe,
        CamelCaseToDashPipe,
        ShotNamePipe,
        TitleURLPipe,
        OrderByPipe,
        ReversePipe
    ],
    imports: [],
    exports: [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        FilterPipe,
        CamelCaseToDashPipe,
        ShotNamePipe,
        TitleURLPipe,
        OrderByPipe,
        ReversePipe
    ]
})
export class PipesModule {
}
