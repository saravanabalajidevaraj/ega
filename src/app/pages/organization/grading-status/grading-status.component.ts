import { Component, AfterViewInit } from '@angular/core';


import {PdfViewerModule } from 'ng2-pdf-viewer';
import { AlertService } from '../../../_services/alert.service';
import { DownloadService } from '../../../_services/download.service';
import { UtilService } from '../../../_services/util.service'
@Component({
    selector: 'app-grading-status',
    templateUrl: './grading-status.component.html',
    styleUrls: ['./grading-status.component.css']
})
export class GradingStatusComponent implements AfterViewInit {
    public pdfs: Array<string> = ['Bizsafe', 'GRADING DECAL', 'Socotec 1', 'Socotec 2'];
    public pdfParsed: Array<string> = [];

    public slideIndex: number = 0;

    constructor(protected alertService: AlertService,
                protected downloadService: DownloadService) { }

    ngAfterViewInit() {
        this.pdfs.forEach((pdf, i) => {
            this.downloadService.local(`../../../../assets/pdf/Grading/${pdf}.pdf`)
                .subscribe(data => this.pdfParsed[i] = URL.createObjectURL(data), data => this.failure(data));
        });
    }

    failure(message) {
        this.alertService.error(message);
    }
}
