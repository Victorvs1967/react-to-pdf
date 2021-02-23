import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './components/ComponentToPrint';

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="container">
      <ComponentToPrint ref={ componentRef } />
      <button className="btn btn-success p-2 m-3" onClick={ handlePrint }>Print this out!</button>
    </div>
  );
}

export default App;
