import {UserChartSettingsInterface} from './user.chart.settings.interface';
import {UserAppSettingsInterface} from './user.app.settings.interface';
import {UserUnitSettingsInterface} from './user.unit.settings.interface';
import {UserDashboardSettingsInterface} from './user.dashboard.settings.interface';
import {UserMapSettingsInterface} from './user.map.settings.interface';
import {UserExportToCsvSettingsInterface} from './user.export-to-csv.settings.interface';

export interface UserSettingsInterface {
  mapSettings?: UserMapSettingsInterface,
  chartSettings?: UserChartSettingsInterface,
  appSettings?: UserAppSettingsInterface,
  unitSettings?: UserUnitSettingsInterface,
  dashboardSettings?: UserDashboardSettingsInterface,
  exportToCSVSettings?: UserExportToCsvSettingsInterface
}
