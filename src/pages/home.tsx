
import Head from '../components/head';
import Window from '../components/window';

export default function Home() {
  return (
    <>
      <Head />
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Window />
      </main>
    </>
  );
}
