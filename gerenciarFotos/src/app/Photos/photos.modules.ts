import { PhotoComponent } from './Photo/photo.component';
import { NgModule } from "@angular/core";


@NgModule({
    declarations:[PhotoComponent],
    exports:[PhotoComponent]
})

export class PhotosModule {}