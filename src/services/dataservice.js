import client from './api'

class DataService {
    
    static data = client.get('/dashboard').then(res => this.data = res.data);
    
    static async getCounters(){
        
        let { counters } = await this.data;

        return counters;
    }
    static async getCovidReports(){

        let { covid_report } = await this.data;

        return covid_report;
    }
    static async getReportsByGender(){

        let { report_by_gender }  = await this.data;

        return report_by_gender[0];
    }
    static async getReportsByGroup(){
        
        let { report_by_group }  = await this.data;

        return report_by_group[0];
    }
}

export default DataService;