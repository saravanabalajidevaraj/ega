import { Component, OnInit } from '@angular/core';
//import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';

//import { DownloadService, AlertService } from '/../../_services';
import {PdfViewerModule } from 'ng2-pdf-viewer';
import { AlertService } from '../../../_services/alert.service';
import { DownloadService } from '../../../_services/download.service';
import { UtilService } from '../../../_services/util.service'

@Component({
    selector: 'app-appreciation-letters',
     moduleId: module.id,
    templateUrl: './appreciation-letters.component.html',
    styleUrls: ['./appreciation-letters.component.css'],
    //providers: [PdfViewerComponent ]
})
export class AppreciationLettersComponent implements OnInit {

     

    public pdfs: Array<string> = ['BOUNA VISTA GARDEN', 'COSL', 'JOOLONGTRANSPORT', 'KNIGHT FRANK', 'LUMOS', 'SAS', 'TANGLIN'];
    public pdfParsed: Array<string> = [];

    public slideIndex: number = 0;

    constructor(protected alertService: AlertService,
                protected downloadService: DownloadService) { }

    ngOnInit() {
        this.pdfs.forEach((pdf, i) => {
            this.downloadService.local(`../../../../assets/pdf/ClientAppreciationLetters/${pdf}.pdf`)
                .subscribe(data => this.pdfParsed[i] = URL.createObjectURL(data), data => this.failure(data));
        });
    }

    failure(message) {
        this.alertService.error(message);
    }
}
