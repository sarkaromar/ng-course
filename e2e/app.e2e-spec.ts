import { CourseAppPage } from './app.po';

describe('course-app App', () => {
  let page: CourseAppPage;

  beforeEach(() => {
    page = new CourseAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
