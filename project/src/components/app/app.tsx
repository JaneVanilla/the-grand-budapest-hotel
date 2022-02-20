import {BrowserRouter,Route,Routes} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import Page404 from '../page-404/page-404';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route';


const Settings = {
  name: 'The Grand Budapest Hotel poster',
  genre: 'Drama',
  year: 2014,
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen settings = {Settings}/>} />
        <Route path='login' element={<SignIn/>} />
        <Route path='mylist' element={<PrivateRoute><MyList/></PrivateRoute>} />
        <Route path='review' element={<AddReview/>} />
        <Route path='player' element={<Player/>}>
          <Route path=':id' element={<Player/>} />
        </Route>
        <Route path='films'>
          <Route path=':id/review' element={<AddReview/>} />
          <Route path=':id' element={<FilmPage/>} />
          <Route index element={<FilmPage/>} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
