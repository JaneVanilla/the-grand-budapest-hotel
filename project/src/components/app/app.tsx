import MainScreen from '../main-screen/main-screen';

const Settings = {
  name: 'The Grand Budapest Hotel poster',
  genre: 'Drama',
  year: 2014,
};

function App(): JSX.Element {
  return <MainScreen settings = {Settings}/>;
}
export default App;
