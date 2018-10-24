import { CommonComponentsModule } from './common-components.module';

describe('CommonModule', () => {
  let commonModule: CommonComponentsModule;

  beforeEach(() => {
    commonModule = new CommonComponentsModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
