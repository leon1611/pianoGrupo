
import Head from '../components/head';
import Body from '../components/body'; 
 
export default function Game() {
  return (
    <>
      <Head />
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Body />
      </main>
    </>
  );
}
