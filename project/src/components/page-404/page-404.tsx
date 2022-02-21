import {Link} from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <div className="page404" style={{height: '100vh', textAlign: 'center', maxWidth:'100%', backgroundColor:'#e1b0b2',color:'#eee5b5',backgroundImage:'url("../../../public/img/bg-the-grand-budapest-hotel.jpg")', fontWeight:'bold',fontSize: '40px'}}>
      <div className="page404__wrapper" style={{paddingTop:'150px', marginBottom:'40px'}}>404 Not Found</div>
      <Link to='/' title='/' style={{fontSize:'20px', color:'#141414'}}>Go to main page</Link>{' '}
    </div>
  );
}

export default Page404;
