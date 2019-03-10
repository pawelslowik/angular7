import { Injectable } from '@angular/core';
import { find } from 'lodash';
import { Status } from '../../model/status';
import { HttpService } from '../http/http.service';

@Injectable()
export class StatusService {

    private statuses: Status[] = [];

    constructor(private httpService: HttpService) {
        this.refreshStatuses();
    }

    refreshStatuses() {
        this.httpService.getStatuses().subscribe(
            statuses => {
                this.statuses = statuses;
                console.log('refreshed');
            },
            error => {
                console.log(error);
                this.statuses = [];
            }
        );
    }

    getStatuses(): Status[] {
        return this.statuses;
    }

    getStatusColor(status: string) {
        const matchedStatus: Status = find(this.statuses, s => s.name === status, 0);
        return matchedStatus ? matchedStatus.color : this.getDefaultStatusColor(status);
    }

    private getDefaultStatusColor(status: string) {
        let color;
        switch (status) {
            case 'canceled': color = 'lightcoral'; break;
            case 'started': color = 'yellow'; break;
            case 'completed': color = 'mediumseagreen'; break;
            case 'not started':
            default: color = 'lightblue'; break;
        }
        return color;
    }
}
