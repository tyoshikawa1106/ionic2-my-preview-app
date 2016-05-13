import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {ActionSheetsBasicPage} from './pages/action-sheets/basic/pages';
import {AlertsBasicPage} from './pages/alerts/basic/pages';
import {AlertsCheckboxPage} from './pages/alerts/checkbox/pages';
import {AlertsConfirmPage} from './pages/alerts/confirm/pages';
import {AlertsPromptPage} from './pages/alerts/prompt/pages';
import {AlertsRadioPage} from './pages/alerts/radio/pages';
import {BadgesPage} from './pages/badges/basic/pages';
import {ButtonsBasicPage} from './pages/buttons/basic/pages';
import {ButtonsBlockPage} from './pages/buttons/block/pages';
import {ButtonsClearPage} from './pages/buttons/clear/pages';
import {ButtonsComponentsPage} from './pages/buttons/components/pages';
import {ButtonsFabPage} from './pages/buttons/fab/pages';
import {ButtonsFullPage} from './pages/buttons/full/pages';
import {ButtonsIconsPage} from './pages/buttons/icons/pages';
import {ButtonsOutlinePage} from './pages/buttons/outline/pages';
import {ButtonsRoundPage} from './pages/buttons/round/pages';
import {ButtonsSizesPage} from './pages/buttons/sizes/pages';
import {CardsBasicPage} from './pages/cards/basic/pages';
import {CardsHeaderPage} from './pages/cards/header/pages';
import {CardsImagePage} from './pages/cards/image/pages';
import {CardsListPage} from './pages/cards/list/pages';
import {CardsAdvancedMapPage} from './pages/cards/advanced-map/pages';
import {CardsAdvancedSocialPage} from './pages/cards/advanced-social/pages';
import {CardsAdvancedWeatherPage} from './pages/cards/advanced-weather/pages';
import {CheckboxesBasicPage} from './pages/checkboxes/basic/pages';
import {GesturesBasicPage} from './pages/gestures/basic/pages';
import {GridBasicPage} from './pages/grid/basic/pages';
import {IconsBasicPage} from './pages/icons/basic/pages';
import {InputsBasicPage} from './pages/inputs/basic/pages';
import {InputsFixedInlinePage} from './pages/inputs/fixed-inline/pages';
import {InputsFloatingPage} from './pages/inputs/floating/pages';
import {InputsInlinePage} from './pages/inputs/inline/pages';
import {InputsInsetPage} from './pages/inputs/inset/pages';
import {InputsPlaceholderPage} from './pages/inputs/placeholder/pages';
import {InputsStackedPage} from './pages/inputs/stacked/pages';
import {ListsAvatarPage} from './pages/lists/avatar/pages';
import {ListsBasicPage} from './pages/lists/basic/pages';
import {ListsDividersPage} from './pages/lists/dividers/pages';
import {ListsHeadersPage} from './pages/lists/headers/pages';
import {ListsIconPage} from './pages/lists/icon/pages';
import {ListsInsetPage} from './pages/lists/inset/pages';
import {ListsMultilinePage} from './pages/lists/multiline/pages';
import {ListsNoLinesPage} from './pages/lists/no-lines/pages';
import {ListsSlidingPage} from './pages/lists/sliding/pages';
import {ListsThumbnailPage} from './pages/lists/thumbnail/pages';
import {LoadingBasicPage} from './pages/loading/basic/pages';
import {ModalsBasicPage} from './pages/modals/basic/pages';
import {NavigationBasicPage} from './pages/navigation/basic/pages';
import {RadiosBasicPage} from './pages/radios/basic/pages';
import {SearchbarsBasicPage} from './pages/searchbars/basic/pages';
import {SegmentsBasicPage} from './pages/segments/basic/pages';
import {SelectsBasicPage} from './pages/selects/basic/pages';
import {SlidesBasicPage} from './pages/slides/basic/pages';
import {TabsBadgesPage} from './pages/tabs/badges/pages';
import {TabsBasicPage} from './pages/tabs/basic/pages';
import {TabsIconPage} from './pages/tabs/icon/pages';
import {TabsIconTextPage} from './pages/tabs/icon-text/pages';
import {ToastBasicPage} from './pages/toast/basic/pages';
import {TogglesBasicPage} from './pages/toggles/basic/pages';
import {ToolbarBasicPage} from './pages/toolbar/basic/pages';
import {ToolbarButtonsPage} from './pages/toolbar/buttons/pages';
import {ToolbarColorsPage} from './pages/toolbar/colors/pages';
import {ToolbarSearchbarPage} from './pages/toolbar/searchbar/pages';
import {ToolbarSegmentPage} from './pages/toolbar/segment/pages';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  rootPage: any = GettingStartedPage;
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Getting Started', component: GettingStartedPage },
      { title: 'Action Sheets', component: ActionSheetsBasicPage },
      { title: 'Alerts', component: AlertsBasicPage },
      { title: 'Alerts(Checkbox)', component: AlertsCheckboxPage },
      { title: 'Alerts(Confirm)', component: AlertsConfirmPage },
      { title: 'Alerts(Prompt)', component: AlertsPromptPage },
      { title: 'Alerts(Radio)', component: AlertsRadioPage },
      { title: 'Badges', component: BadgesPage },
      { title: 'Buttons', component: ButtonsBasicPage },
      { title: 'Buttons(Block)', component: ButtonsBlockPage },
      { title: 'Buttons(Clear)', component: ButtonsClearPage },
      { title: 'Buttons(Components)', component: ButtonsComponentsPage },
      { title: 'Buttons(Fab)', component: ButtonsFabPage },
      { title: 'Buttons(Full)', component: ButtonsFullPage },
      { title: 'Buttons(Icons)', component: ButtonsIconsPage },
      { title: 'Buttons(Outline)', component: ButtonsOutlinePage },
      { title: 'Buttons(Round)', component: ButtonsRoundPage },
      { title: 'Buttons(Sizes)', component: ButtonsSizesPage },
      { title: 'Cards', component: CardsBasicPage },
      { title: 'Cards(Header)', component: CardsHeaderPage },
      { title: 'Cards(Image)', component: CardsImagePage },
      { title: 'Cards(List)', component: CardsListPage },
      { title: 'Cards(AdvancedMap)', component: CardsAdvancedMapPage },
      { title: 'Cards(AdvancedSocial)', component: CardsAdvancedSocialPage },
      //{ title: 'Cards(AdvancedWeather)', component: CardsAdvancedWeatherPage },
      { title: 'Checkbox', component: CheckboxesBasicPage },
      { title: 'Gestures', component: GesturesBasicPage },
      { title: 'Grid', component: GridBasicPage },
      { title: 'Icons', component: IconsBasicPage },
      { title: 'Inputs', component: InputsBasicPage },
      { title: 'Inputs(FixedInline)', component: InputsFixedInlinePage },
      { title: 'Inputs(Floating)', component: InputsFloatingPage },
      { title: 'Inputs(Inline)', component: InputsInlinePage },
      { title: 'Inputs(Placeholder)', component: InputsPlaceholderPage },
      { title: 'Inputs(Stacked)', component: InputsStackedPage },
      { title: 'Lists', component: ListsBasicPage },
      { title: 'Lists(Avatar)', component: ListsAvatarPage },
      { title: 'Lists(Dividers)', component: ListsDividersPage },
      { title: 'Lists(Headers)', component: ListsHeadersPage },
      { title: 'Lists(Icon)', component: ListsIconPage },
      { title: 'Lists(Inset)', component: ListsInsetPage },
      { title: 'Lists(Multiline)', component: ListsMultilinePage },
      { title: 'Lists(NoLine)', component: ListsNoLinesPage },
      { title: 'Lists(Sliding)', component: ListsSlidingPage },
      { title: 'Lists(Thumbnail)', component: ListsThumbnailPage },
      { title: 'Loading', component: LoadingBasicPage },
      { title: 'Modals', component: ModalsBasicPage },
      { title: 'Navigation', component: NavigationBasicPage },
      { title: 'Radios', component: RadiosBasicPage },
      { title: 'Searchbars', component: SearchbarsBasicPage },
      { title: 'Segments', component: SegmentsBasicPage },
      { title: 'Selects', component: SelectsBasicPage },
      { title: 'Slides', component: SlidesBasicPage },
      { title: 'Tabs', component: TabsBasicPage },
      { title: 'Tabs(Badges)', component: TabsBadgesPage },
      { title: 'Tabs(Icon)', component: TabsIconPage },
      { title: 'Tabs(IconText)', component: TabsIconTextPage },
      { title: 'Toast', component: ToastBasicPage },
      { title: 'Toggles', component: TogglesBasicPage },
      { title: 'Toolbar', component: ToolbarBasicPage },
      { title: 'Toolbar(Buttons)', component: ToolbarButtonsPage },
      { title: 'Toolbar(Colors)', component: ToolbarColorsPage },
      { title: 'Toolbar(Searchbar)', component: ToolbarSearchbarPage },
      { title: 'Toolbar(Segment)', component: ToolbarSegmentPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
