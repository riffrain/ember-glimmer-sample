import Component, { tracked } from '@glimmer/component';

export default class WeatherTracker extends Component {
  @tracked weather;

  constructor(options) {
    super(options);
    this.loadWeather();
  }

  async loadWeather() {
    let code = this.args.zip || 'xxx';
    let response = await fetch(`/${code}.json`);
    this.weather = await response.json();
    setTimeout(() => this.loadWeather(), 2000);
  }
}
