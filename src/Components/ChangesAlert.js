import Alert from 'react-bootstrap/Alert';

function ChangesAlert() {
  return (
    <>
        <Alert variant="info" className="mt-3 mx-2" style={{ textAlign: "center" }}>
          <p className='my-0'> Bienvenue ! Ceci est la première version fonctionnelle de mon portfolio, il est donc amené à évoluer. Pour voir ce qui a changé depuis la dernière fois, c'est <Alert.Link href="/updates" >ici</Alert.Link> !</p>
        </Alert>
    </>
  );
}

export default ChangesAlert;