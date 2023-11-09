import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCkedit';

  public Editor = DecoupledEditor;
  public onReady( editor: DecoupledEditor ): void {
    const element = editor.ui.getEditableElement()!;
    const parent = element.parentElement!;

    parent.insertBefore(
      editor.ui.view.toolbar.element!,
      element
    );
  }
}
