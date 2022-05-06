import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovimentacaoNewComponent } from "./movimentacao-new/movimentacao-new.component";
import { MovimentacaoListComponent } from "./movimentacao-list/movimentacao-list.component";
import { CorrentistaComponent } from "./correntista/correntista.component";

const routes: Routes = [
    { path: 'movimentacoes-new', component: MovimentacaoNewComponent },
    { path: 'movimentacoes', component: MovimentacaoListComponent },
    { path: 'correntistas', component: CorrentistaComponent },
    { path: '', redirectTo: 'movimentacoes', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
