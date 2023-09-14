// import { useDispatch } from 'react-redux';
// import { someFunc } from './store';
import Layout from 'components/molecules/Layout/Layout';
import ApplicationAuth from './modules/Auth';
import { useLocation } from 'react-router-dom';

function Application() {
  // const count = useSelector((state: RootState) => state.someReducer);
  // const dispatch = useDispatch();

  const location = useLocation();

  return (
    <>
      {/* <button onClick={() => dispatch(someFunc('lel'))}>kek</button> */}
      <Layout location={location}>
        {/* {loading && <PageLoader />} */}
        <ApplicationAuth />
      </Layout>
    </>
  );
}

export default Application;
