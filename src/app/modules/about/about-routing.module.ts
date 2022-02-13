import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";

const aboutRoutes: Routes = [
    {path: "about", component: AboutPageComponent}
]

@NgModule({
    imports: [RouterModule.forChild(aboutRoutes)],
    exports: [RouterModule]
})

export class AboutRoutingModule {}