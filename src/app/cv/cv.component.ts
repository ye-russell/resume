import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };

    const pdfTable = this.pdfTable!.nativeElement;

    // doc.fromHTML(pdfTable.innerHTML, 15, 15, {
    //   width: 190,
    //   'elementHandlers': specialElementHandlers
    // });

    doc.save('tableToPdf.pdf');
  }
}
