import { NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { NovaListaComponent } from "./components/nova-lista/nova-lista.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'event', component: EventosComponent},
  {path: 'nova-lista', component: NovaListaComponent},
  {path: 'list/:id', component: ItemDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
